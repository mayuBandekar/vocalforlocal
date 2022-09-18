import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import $ from "jquery";
import { login } from "../../redux/action/vocal";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import "../css/login.css";

const Login = () => {
    const urlData = "/userLogin"
    const [msg, setMsg] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });


    const userLogin = async (event) => {
        localStorage.removeItem("email");
        localStorage.removeItem("fail");
        event.preventDefault();
        setMsg("Please wait.... ");
        dispatch(login(userData.email, userData.password));
        setTimeout(() => {
            const email = localStorage.getItem("email");
            const fail = localStorage.getItem("fail");
            if(email){
                debugger
                setMsg("Login Success");
                navigate("/productList");
                removeMsg();
            }
            if(fail){
                setMsg("Login Failed , Id or Password Does Not Matched");
                removeMsg();
            }
          
        }, 3000);
    };
    const removeMsg = () => {
        setTimeout(() => {
            // $(".notice").addClass("d-none");
            setMsg("");
        }, 3000);
        localStorage.removeItem("email");
        localStorage.removeItem("fail");

    };
    
    const handleInput = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        const newData = { ...userData, [name]: val };
        setUserData(newData);
    }
   
    return (
        <div className='login-body'>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col sm={6}>
                        <Card>
                            <div className='exam-form'>
                                <div className="ms-panel ms-panel-fh">
                                    <div className="ms-panel-header">
                                        <h6>Login Form</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <form className="needs-validation"
                                            onSubmit={(event) => {
                                                userLogin(event);
                                            }}
                                        >
                                            <div className="form-row">
                                                <div className="col-md-12 mb-3">
                                                    <label htmlFor="validationCustom08">Email Address</label>
                                                    <div className="input-group">
                                                        <input type="email" className="form-control" placeholder="Email Address" name='email'
                                                         onChange={handleInput}
                                                            required />
                                                       
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-2">
                                                    <label htmlFor="validationCustom09">Password</label>
                                                    <div className="input-group">
                                                        <input type="password" className="form-control" name='password' placeholder="Password" required 
                                                        onChange={handleInput}
                                                        />
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                      
                                            <button className="btn btn-primary mt-4 d-block w-100" type="submit">Sign In</button>
                                        </form>
                                        <p className="mb-0 mt-3">Don't have an account? <Link className="btn-link" to="/">Create an Account</Link> </p>
                                        <div className="form-group overflow-hidden mt-4">
                                            <div className="alert rounded-0 notice d-none">
                                                <h6 className="p-0 m-0 text-center">
                                                    {msg}
                                                    </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
export default Login; 