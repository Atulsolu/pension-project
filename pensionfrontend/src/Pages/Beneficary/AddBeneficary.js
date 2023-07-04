import { useState } from 'react';
import React from 'react'
import Axios from 'axios';
import Pennav from "../../Layout/PensionerNav"
import './beneficary.css';

import JWT from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
export default function AddBeneficary() {
    const Navigate=useNavigate();
    const [BeneficaryfName, setfname] = useState('');
    const [BeneficarylName, setlname] = useState('');
    const [Relation, setRel] = useState('');
    const p = localStorage.getItem("pensionertoken");
    console.log(p);
    const d = JWT(p);
    console.log(d.PensionerId);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!BeneficaryfName || !BeneficarylName || !Relation) {
            alert('Please fill in all fields.');
            return;
        }
        Axios.post("https://localhost:7130/api/Beneficary/AddingBeneficiary", {

            beneficaryFirstName: BeneficaryfName,
            beneficaryLastName: BeneficarylName,
            beneficaryRelation: Relation,
            pensionerId: d.PensionerId,
        }
        ).then((response) => {
            console.log(response);
            if (response.status === 200) {
                 alert("Beneficary Added sucessfully");
                Navigate("/pensionerpage");
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
        <>
          <Pennav></Pennav>  
            <div>
                <section className="vh-100 gradient-form" style={{ backgroundcolor: "#eee" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-10 col-md-15 col-lg-12 col-xl-15">
                                <div className="card bg-secondary text-white" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-center">

                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="text-uppercase text-center mb-5">Add Beneficary</h2>

                                            <form>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="formPenid" className="form-control form-control-lg" name='Pensioner_id' value={BeneficaryfName} onChange={(e) => setfname(e.target.value)} />
                                                    <label className="form-label" htmlFor="formPenid">First Name</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form2Example1cg" className="form-control form-control-lg" name='pen_name' value={BeneficarylName} onChange={(e) => setlname(e.target.value)} />
                                                    <label className="form-label" htmlFor="form2Example1cg">Last Name</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="dob" className="form-control form-control-lg" name='Dob' value={Relation} onChange={(e) => setRel(e.target.value)} />
                                                    <label className="form-label" htmlFor="dob">Relation</label>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button onClick={handleSubmit}
                                                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Add</button>
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
        </>
    );
}