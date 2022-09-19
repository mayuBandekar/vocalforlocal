import React, { useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";
import $ from "jquery";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
const Registration_Form = () => {

    useEffect(() => {
        // streamData();
        // ClassData();
    }, [])
    const urlData = "/user";
    const [students, setStudents] = useState({
        name: "",
        contact_no: "",
        email: "",
        password: "",
        confirm_pass: ""

    });

    const [formErr, setFormErr] = useState([]);
    const [titleErr, setTitleErr] = useState('');
    const [msg, setMsg] = useState("");
    const [stream, setStream] = useState([]);
    const [className, setClassName] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target
        setStudents({ ...students, [name]: value })
        console.log(students);
    }
        
  
    const register = (e) => {
        e.preventDefault();
        // console.log("hii");
        let isValid = errHandel();
        if (isValid === true) {
            let headers = { headers: { 'Accept': 'application/json' } };

            console.log("validate");
            const ajax = axios({
                method: "POST",
                url: urlData,
                data: {
                    ...students,
                },

            });
            ajax.then((response) => {
                $(".notice").removeClass("d-none");
                $(".notice").addClass("alert-success");
                setStudents({
                    name: "",
                    contact_no: "",
                    email: "",
                    password: "",
                    confirm_pass: ""
                })
                swal({
                    title: "Congratulations, your account has been successfully created. ",
                    icon: "success",
                    timer: 2000
                })
            });
            ajax.catch((error) => {
                if (error) {
                    $(".notice").removeClass("d-none");
                    $(".notice").addClass("alert-danger");
                    setMsg("You are already registerd with us");
                    removeMsg();
                }
            });
        } else {
            console.log("err");
        }
    }
    const removeMsg = () => {
        setTimeout(() => {
            $(".notice").addClass("d-none");
            setMsg("");
        }, 3000);
    };

  
    const errHandel = () => {
        let formErr = {};
        let isValid = true;
        if (students.name === null || students.name === undefined || students.name === '') {
            isValid = false;
            formErr["name"] = "Please enter name !";
        }
        if (students.contact_no === null || students.contact_no === undefined || students.contact_no === '') {
            isValid = false;
            formErr["contact_no"] = "Please enter contact number!";
        }
        if (students.email === null || students.email === undefined || students.email === '') {
            isValid = false;
            formErr["email"] = "Please select email !";
        }
        const reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var test = reg.test(students.password);
        if (test) {
            console.log("pass");
            // setStudents({ ...students, [name]: value })
        } else {
            // console.log('fail');
            isValid = false;
            formErr["password"] = "Password must be at least 8 characters in lenght containing OneUppercase letter , One lowercase letter , Special character & One number ";
        }
        // if (students.password === null || students.password === undefined || students.password === '') {
        //     isValid = false;
        //     formErr["password"] = "Please enter password !";
        // }
        if (students.confirm_pass === null || students.confirm_pass === undefined || students.confirm_pass === '') {
            isValid = false;
            formErr["confirm_pass"] = "Please enter confirm password !";
        }
        if (students.password !== students.confirm_pass) {
            isValid = false;
            formErr["confirm_pass"] = "Confirm password does not match"
        }
        setFormErr(formErr);
        return isValid;
    };
    return (
        <>

            <div className='regi-body'>
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col sm={8}>
                            <Card>
                                <div className='exam-form'>
                                    <div className="ms-panel">
                                        <div className="ms-panel-header d-flex justify-content-between">
                                            <h6>Student Registration</h6>
                                            {/* <Link className='btn btn-primary' to="/facultyRegistration">Faculty Registration</Link> */}
                                        </div>
                                        <div className="ms-panel-body">
                                            <form onSubmit={register}>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input placeholder="Enter your name" name='name' className='form-control'
                                                        onChange={handleChange} value={students.name} />
                                                    {formErr ? <div className="mt-2" style={{ fontSize: 12, color: "red" }}>{formErr.name}</div> : null}
                                                </div>
                                                <div className='form-group'>
                                                    <label>Contact No.</label>
                                                    <input placeholder='Contact No' className='form-control' name='contact_no' value={students.contact_no}
                                                        onChange={handleChange} />
                                                    {formErr.contact_no ? <div className="mt-2" style={{ fontSize: 12, color: "red" }}>{formErr.contact_no}</div> : null}
                                                </div>
                                                <div className='form-group'>
                                                    <label>Email</label>
                                                    <input placeholder='Email' autoComplete="off" type='email' className='form-control' name='email'
                                                        onChange={handleChange} value={students.email} />
                                                    {formErr.email ? <div className="mt-2" style={{ fontSize: 12, color: "red" }}>{formErr.email}</div> : null}
                                                </div>
                                                <div className='form-group'>
                                                    <label>Password</label>
                                                    <input placeholder='Password' type='password' autoComplete="off" className='form-control' name='password'
                                                        onChange={handleChange} value={students.password} />
                                                    {formErr.password ? <div className="mt-2" style={{ fontSize: 12, color: "red" }}>{formErr.password}</div> : null}
                                                </div>
                                                <div className='form-group'>
                                                    <label>Confirm Password</label>
                                                    <input placeholder='Confirm Password' type="password" autoComplete="off" className='form-control' name='confirm_pass'
                                                        onChange={handleChange} value={students.confirm_pass} />
                                                    {formErr.confirm_pass ? <div className="mt-2" style={{ fontSize: 12, color: "red" }}>{formErr.confirm_pass}</div> : null}
                                                </div>
                                                <button type='submit' className='btn btn-primary'>Register</button>
                                                <div className="form-group mt-4">
                                                    Already have an account? <Link to="/login">Sign In</Link>
                                                </div>
                                                {/* <button className='btn btn-danger mx-2'  >Cancel</button> */}
                                                <div className="form-group overflow-hidden mt-4">
                                                    <div className="alert rounded-0 notice d-none">
                                                        <h6 className="p-0 m-0 text-center">{msg}</h6>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
export default Registration_Form;