import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
import Pennav from "../../Layout/PensionerNav"
import './beneficary.css';
import JWT from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export default function UpdateBeneficary() {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [rel, setrel] = useState('');
    const abc=localStorage.getItem("pensionertoken");
    const Navigate=useNavigate();
    console.log(abc);
    const d= JWT(abc);
    console.log(d.PensionerId);
    const b=localStorage.getItem('benid')
    const handleSubmit = (e) => {
        e.preventDefault();
        const ob={
            beneficaryFirstName: fname,
            beneficaryLastName: lname,
            beneficaryRelation:rel,
            pensionerId:d.PensionerId,
        }
        if (!fname || ! lname || !rel) {
            alert('Please fill in all fields.');
            return;
        }
        Axios.put(`https://localhost:7130/api/Beneficary/UpdateBeneficaryByPensionerId/${d.PensionerId}/${b}`,ob,{
            headers:{
                'Authorization':`Bearer ${abc}`
            }
        }       
        ).then((response) => {
            console.log(response);
            if (response.status === 200) {
                alert("Beneficary Updated sucessfully");
                Navigate("/getbeneficary")
            }
        }).catch((error) => {

            if (error.response && error.response.status === 404) {
                alert('An error occurred. Please try again.');
            }
            console.log(error);
        })

    }

    return (
        <div>
            <Pennav></Pennav>
            <section className="vh-100 gradient-form" style={{ backgroundcolor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10 col-md-15 col-lg-12 col-xl-15">
                            <div className="card bg-secondary text-white" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="text-uppercase text-center mb-5">Update Beneficary</h2>

                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="formPenid" className="form-control form-control-lg" name='benficaryname' value={fname} onChange={(e) => setfname(e.target.value)} />
                                                <label className="form-label" htmlFor="formPenid">First Name</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example1cg" className="form-control form-control-lg" name='beneficaryname' value={lname} onChange={(e) => setlname(e.target.value)} />
                                                <label className="form-label" htmlFor="form2Example1cg">Last Name</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example1cg" className="form-control form-control-lg" name='relation' value={rel} onChange={(e) => setrel(e.target.value)} />
                                                <label className="form-label" htmlFor="form2Example1cg">Relation</label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button onClick={handleSubmit}
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Update</button>
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
