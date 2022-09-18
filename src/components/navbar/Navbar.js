import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {

  const [cartCount , setCartCount] = useState(0);

  const cartData = useSelector((state) => state.shop.cart);
  console.log(cartData);
  useEffect(()=> {
    let count = 0;
    cartData.map(item => {
      count += item.qty
    })
    setCartCount(count)
  },[cartData,cartCount])

  return (
    <div className={styles.navbar} >

      <div className="container">
        <nav class="navbar navbar-light bg-light d-flex justify-content-between text-center" style={{ width: "100%" }}>
          <h4 class="navbar-brand"><strong>Shopping Page</strong></h4>

          <div className="">
            <Link to="/CartPage" style={{ textDecoration: 'none' }}>
              {/* <img
            // className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          /> */}
              <button className="btn btn-primary mt-0"  ><span className="mx-1" ><strong>Cart</strong></span>
                <AiOutlineShoppingCart size={25} />

                <span
                  className="badge badge-light ml-2 mx-2"
                  style={{
                    backgroundColor: "#e8e8e8",
                    color: "black",
                    borderRadius: "20px",
                  }}
                >
                  {cartCount}
                </span>
              </button>
            </Link> 

          </div>
        </nav>
      </div>

    </div>
  )
}

export default Navbar;
