import React, { useState, useEffect } from "react";
import "../css/Cart.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart , adjustQty } from '../../redux/action/vocal';


const Cart = () => {
    const dispatch = useDispatch();

    const [input , setInput] = useState()
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const cartData = useSelector((state) => state.shop.cart);
    console.log("cartData", cartData);
    useEffect(() => {
        let items = 0;
        let price = 0;

        cartData.map((item) => {
            items += item.qty;
            price += item.qty * item.pro_price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cartData, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const handleclose = (id) => {
      dispatch(removeFromCart(id));

    }

    const onChangeHandler = (data,e) => {
        let eData = Number(e.target.value);
        let data1= Number(data)
        // console.log(e.target.value);
        console.log(eData);
        console.log(data1);

      dispatch(adjustQty(data1,eData));

    }
    return (
        <>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                <div className="col align-self-center text-right text-muted">3 items</div>
                            </div>
                        </div>
                        {cartData && cartData.map((item) => (
                            <div className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid" src={item.pro_img} /></div>
                                    <div className="col">
                                        <div className="row text-muted">{item.pro_name}</div>
                                        <div className="row">{item.pro_code}</div>
                                    </div>
                                    <div className="col cartItem align-items-center" >
                                        <input className="align-items-center" min="1" type="number" id="qty" name="qty" value={item.qty} onChange={(e)=>onChangeHandler(item.id,e)} />
                                    </div>
                                    <div className="col">&euro; {item.pro_price}
                                        <button className="deleteItem mx-4" onClick={() => handleclose(item.id)}>&#10005;</button>
                                    </div>
                            </div>
                            </div>
                        ))}

                    <div className="back-to-shop" ><a href="/productList" ><IoArrowBackOutline /><span className="text-muted mx-2" style={{ textDecoration: "none" }} >Back to shop</span></a></div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr />
                    <div className="row">
                        <div className="col" style={{ paddingLeft: "0" }}>ITEMS {totalItems}</div>
                        <div className="col text-right">&euro; {totalPrice}</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        {/* <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select> */}
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code" />
                    </form>
                    <div className="row" style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }} >
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">&euro; {totalPrice}</div>
                    </div>
                    <button className="btn">Proceed To Checkout</button>
                </div>
            </div>
        </div>
        </>
    );
};
export default Cart;