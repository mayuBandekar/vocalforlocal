import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
// import Animation from "./Animation";
import "../css/productDetails.css";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addToCart } from '../../redux/action/vocal';
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBackOutline } from "react-icons/io5";


const ProductDetails = () => {

    const dispatch = useDispatch();
    const id = useParams();
    console.log(id.id);

    //   const [color, setColor] = useState("#80CED7");

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const [productData, setProductData] = useState([]);


    useEffect(() => {
        getProductDetails(id.id);
    }, [id.id])


    const getProductDetails = (idP) => {
        const product = axios({
            method: "GET",
            url: `/products/${idP}`
        });
        product.then((res) => {
            setProductData(res.data.data)
        })
    }

    const handleAddToCart = (id) => {
        dispatch(addToCart(id));

    }

    return (
        <>
            <div className="container mt-5">
                {productData && productData.map((data) => {
                    return (
                        <>
                            <div className="container">
                                <div className="card">
                                    <div className="container-fluid">
                                        <div className="wrapper row">
                                            <div className="preview col-md-6">

                                                <div className="preview-pic tab-content">
                                                    <div className="tab-pane active" id="pic-1"><img src={data.pro_img} /></div>
                                                    <div className="tab-pane" id="pic-2"><img src={data.pro_img} /></div>
                                                    <div className="tab-pane" id="pic-3"><img src={data.pro_img} /></div>
                                                    <div className="tab-pane" id="pic-4"><img src={data.pro_img} /></div>
                                                    <div className="tab-pane" id="pic-5"><img src={data.pro_img} /></div>
                                                </div>
                                                <ul className="preview-thumbnail nav nav-tabs">
                                                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={data.pro_img} /></a></li>
                                                    <li><a data-target="#pic-2" data-toggle="tab"><img src={data.pro_img} /></a></li>
                                                    <li><a data-target="#pic-3" data-toggle="tab"><img src={data.pro_img} /></a></li>
                                                    <li><a data-target="#pic-4" data-toggle="tab"><img src={data.pro_img} /></a></li>
                                                    <li><a data-target="#pic-5" data-toggle="tab"><img src={data.pro_img} /></a></li>
                                                </ul>

                                            </div>
                                            <div className="details col-md-6">
                                                <h3 className="product-title">{data.pro_name}</h3>
                                                <div className="rating">
                                                    <ReactStars
                                                        count={5}
                                                        onChange={ratingChanged}
                                                        size={24}
                                                        isHalf={true}
                                                        emptyIcon={<i className="far fa-star"></i>}
                                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                        fullIcon={<i className="fa fa-star"></i>}
                                                        activeColor="#ffd700"
                                                    />
                                                    <div className="stars">
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                    </div>
                                                    <span className="review-no">{data.reviews} reviews</span>
                                                </div>
                                                <p className="product-description">{data.pro_info}</p>
                                                <h4 className="price">current price: <span>${data.pro_price}</span></h4>
                                                <p className="vote"><strong>{data.enjoyed}%</strong> of buyers enjoyed this product! <strong>({data.votes} votes)</strong></p>
                                                <h5 className="sizes">sizes:
                                                    <span className="size" data-toggle="tooltip" title="small">s</span>
                                                    <span className="size" data-toggle="tooltip" title="medium">m</span>
                                                    <span className="size" data-toggle="tooltip" title="large">l</span>
                                                    <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                                </h5>
                                                <h5 className="colors">colors:
                                                    <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                                    <span className="color green"></span>
                                                    <span className="color blue"></span>
                                                </h5>
                                                <div className="action">
                                                    <button className="add-to-cart btn btn-default" type="button" onClick={() => handleAddToCart(data.id)}>add to cart</button>
                                                </div>
                                            </div>
                                            <div className="back-to-shop" ><a href="/productList" ><IoArrowBackOutline /><span className="text-muted mx-2" style={{ textDecoration: "none" }} >Back to shop</span></a></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </div>
        </>
    );
}

export default ProductDetails;