import React from 'react'
import axios from 'axios';
import { useRef } from 'react';
import {useNavigate } from 'react-router-dom';
export default function Admlogin() {
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

            const res = await axios.post(`https://localhost:7130/api/Admin/AdminLogin`, data);
            localStorage.setItem("admintoken",res.data.token);
            alert('Log in successfully');
            console.log(res);
            navigate("/Adminpage");
        }
        catch (error) {
            alert(error.response.data);
            console.log(error);
        }
    }

  return (
    <div>
    <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-12">
                    <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                                <h2 className="fw-bold mb-2 text-uppercase">Admin Login</h2>
                                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="typeEmailX" className="form-control form-control-lg" ref={emailref} />
                                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="password" id="typePasswordX" className="form-control form-control-lg" ref={passwordref} />
                                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                                </div>

                                <button className="btn btn-outline-light btn-lg px-5" type="button" onClick={submithandle}>Login</button>

                            </div>

                            <div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}
