import React from 'react';
import axios from 'axios';
import { useRef } from 'react';
import "../Styles/Pensionerlogin.css";
import { NavLink, useNavigate } from 'react-router-dom';
export default function Pensionerlogin() {

    const emailref = useRef('');
    const passwordref = useRef('');
    const navigate = useNavigate();
    const submithandle = async (event) => {
        event.preventDefault();
        const data = {
            email: emailref.current.value,
            password: passwordref.current.value,
        };
        ;
        try {

            const res = await axios.post(`https://localhost:7130/api/Pensioner/PensionerLogin`, data);
            localStorage.setItem("pensionertoken", res.data.token);
            alert('Log in successfully');
            console.log(res);
            navigate("/pensionerpage");
        }
        catch (error) {
            alert(error.response.data);
            console.log(error);
        }
    }

    return (
        <div>
            <section className="h-40 gradient-form" style={{ backgroundcolor: "#eee" }}>
                <div className="container py-5 h-40">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    style={{ width: "185px" }} alt="logo" />
                                                <h4 className="mt-1 mb-5 pb-1">Pensioner Login</h4>
                                            </div>

                                            <form>
                                                <p>Please login to your account</p>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="typeEmailX" className="form-control"
                                                        placeholder="email address" ref={emailref} />
                                                    <label className="form-label" for="form2Example11">Email</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="typePasswordX" className="form-control" placeholder="Password" ref={passwordref} />
                                                    <label className="form-label" for="form2Example22">Password</label>
                                                </div>
                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={submithandle}>Log
                                                        in</button>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <NavLink className="btn btn-outline-danger" to="/signup">Create new</NavLink>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0"> Designed By Atul</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
