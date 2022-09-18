import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { products } from "../../redux/action/vocal";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import sampleImage from '../logo192.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import "../css/productDetails.css";
import { addToCart } from '../../redux/action/vocal';
import Navbar from '../navbar/Navbar';
import ReactStars from 'react-rating-stars-component';
const ProductList = () => {

    const dispatch = useDispatch();
    const ProductsData = useSelector((state) => state.Product);
    const [productAll, setProductAll] = useState([]);
    useEffect(() => {
        getProductData();
        getAllProducts();
    }, [])

    const getProductData = () => {
        const ajax = axios({
            method: "GET",
            url: "/product"
        }).then((res) => {
            console.log("res", res);
            // dispatch(products(res.data.data));

        })
    }

    const getAllProducts = () => {
        const ajax = axios({
            method: "GET",
            url: "/products"
        }).then((res) => {
            dispatch(products(res.data.data));
            setProductAll(ProductsData.products)

        })
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const handleAddToCart = (id) => {
        dispatch(addToCart(id));

    }

    return (
        <>
            <h1 className='text-info text-center'>Products</h1>
            <div className="container col-lg-12 col-xs-6" style={{ marginTop: "100px" }}>
                <div className="row my-2">

                    {/* <Row xs={3} md={4} className="g-4"> */}
                    {productAll && productAll.map((data) => {
                        return (
                            <>
                                <div className="col-md-4 my-3">
                                    <div className="bbb_deals">
                                        <div className="ribbon ribbon-top-right"><span><small className="cross">x </small>{data.cat_id}</span></div>
                                        <Link
                                            className="text-decoration-none"
                                            to={`/productDetailsPage/${data.id}`}
                                        >
                                            <div className="bbb_deals_title">Today's Offer</div>
                                            <div className="bbb_deals_slider_container">
                                                <div className=" bbb_deals_item hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light" >
                                                    <div className="bbb_deals_image"><img src={data.pro_img} alt="" /></div>
                                                    <div className="bbb_deals_content">
                                                        <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                                            <div className="bbb_deals_item_category"><strong>{data.pro_name}</strong></div>
                                                            {/* <div className="bbb_deals_item_price_a ml-auto"><strike> &euro;  {data.pro_price}</strike></div> */}
                                                        </div>
                                                        <div className="bbb_deals_info_line d-flex flex-row justify-content-between">
                                                            <div className="bbb_deals_item_name">{data.pro_code}</div>
                                                            <div className="bbb_deals_item_price ml-auto"> &euro;  {data.pro_price}</div>
                                                        </div>
                                                        <div className="available">
                                                            <div className="available_line d-flex flex-row justify-content-between">
                                                                <div className="available_title"><strong>Available: </strong><span>{data.cat_id}</span></div>
                                                                <ReactStars
                                                                    count={5}
                                                                    onChange={ratingChanged}
                                                                    size={24}
                                                                    isHalf={true}
                                                                    emptyIcon={<i className="far fa-star"></i>}
                                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                                    fullIcon={<i className="fa fa-star"></i>}
                                                                    activeColor="#ffd700"
                                                                />                                            </div>
                                                            <div className="available_bar"><span style={{ width: "17%" }}></span></div>
                                                            <button onClick={() => handleAddToCart(data.id)} className='btn btn-primary'><strong>Add to Cart</strong></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </>
                        )
                    })
                    }
                </div>

            </div>
        </>
    );
}

export default ProductList;