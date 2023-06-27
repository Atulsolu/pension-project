import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
import './Payment.css';

export default function Payment() {
    const [pensionerid, setPid] = useState('');
    const [PensionerName, setPname] = useState('');
    const [date, setDate] = useState('');
    const p=localStorage.getItem("admintoken");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pensionerid || !PensionerName || !date) {
            alert('Please fill in all fields.');
            return;
        }
        Axios.post("https://localhost:7130/api/PensionPayout/PaymentByPensionerId", {

            pensionerId: pensionerid,
            pensionerName: PensionerName,
            payoutDate: date
        },{
            headers:{
                'Authorization':`Bearer ${p}`
            }
        }       
        ).then((response) => {
            console.log(response);
            if (response.status === 200) {
                alert("Payment sent sucessfully");
            }
        }).catch((error) => {

            if (error.response && error.response.status === 404) {
                alert('Pensioner Not Found.');
            } else {
                alert('An error occurred. Please try again.');
            }
            console.log(error);
        })

    }

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10 col-md-15 col-lg-12 col-xl-15">
                            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="text-uppercase text-center mb-5">Send Payment</h2>

                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-4">
                                                <input type="number" id="formPenid" className="form-control form-control-lg" name='Pensioner_id' value={pensionerid} onChange={(e) => setPid(e.target.value)} />
                                                <label className="form-label" htmlFor="formPenid">Pensioner Id</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example1cg" className="form-control form-control-lg" name='pen_name' value={PensionerName} onChange={(e) => setPname(e.target.value)} />
                                                <label className="form-label" htmlFor="form2Example1cg">Pensioner Name</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="date" id="dob" className="form-control form-control-lg" name='Dob' value={date} onChange={(e) => setDate(e.target.value)} />
                                                <label className="form-label" htmlFor="dob">DOB</label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Send</button>
                                            </div>
                                        </form>
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
