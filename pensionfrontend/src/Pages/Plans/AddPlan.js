import React from 'react'
import Axios from 'axios';
import Admnav from "../../Layout/AdminNav"
import { useState } from 'react';
import './plan.css';
import { useNavigate } from 'react-router-dom';

export default function AddPlan() {
    const Navigate=useNavigate();
    const [PlanName, setpname] = useState('');
    const [PlanDescription, setDes] = useState('');
    const p=localStorage.getItem("admintoken");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!PlanName || ! PlanDescription) {
            alert('Please fill in all fields.');
            return;
        }
        Axios.post("https://localhost:7130/api/RetirementPlan/AddingPlan", {

            planName: PlanName,
            planDescription: PlanDescription,
        },{
            headers:{
                'Authorization':`Bearer ${p}`
            }
        }       
        ).then((response) => {
            console.log(response);
            if (response.status === 200) {
                alert("Plan Added sucessfully");
                Navigate("/adminpage")
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
            <Admnav></Admnav>
            <section className="vh-100 gradient-form" style={{ backgroundcolor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10 col-md-15 col-lg-12 col-xl-15">
                            <div className="card bg-secondary text-white" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="text-uppercase text-center mb-5">Add Plan</h2>

                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="formPenid" className="form-control form-control-lg" name='Pensioner_plan' value={PlanName} onChange={(e) => setpname(e.target.value)} />
                                                <label className="form-label" htmlFor="formPenid">Plan Name</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example1cg" className="form-control form-control-lg" name='pen_name' value={PlanDescription} onChange={(e) => setDes(e.target.value)} />
                                                <label className="form-label" htmlFor="form2Example1cg">Plan Description</label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button onClick={handleSubmit}
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Add Plan</button>
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
