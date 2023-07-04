import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
import Pennav from "../../Layout/PensionerNav"
import '../Beneficary/beneficary.css';
import JWT from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export default function UpdatePensioner() {
    const Navigate=useNavigate();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [pass, setPass] = useState('');
    const [Dob, setDOB] = useState('');
    const [gen, setGen] = useState('');
    const [Doj, setDOJ] = useState('');
    const [rdate, setRdate] = useState('');
    const [sal, setSal] = useState('');
    const abc = localStorage.getItem("pensionertoken");
    console.log(abc);
    const d = JWT(abc);
    console.log(d.PensionerId);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fname || !lname || !pass || !Dob || !gen || !Doj || !rdate || !sal) {
            alert('Please fill in all fields.');
            return;
        }
        const d11={
            pensionerId: d.PensionerId,
            first_name: fname,
            last_name: lname,
            pensioner_Password: pass,
            dob: Dob,
            gender: gen,
            doj: Doj,
            retirement_date: rdate,
            salary: sal
        }
        console.log(d11);
        Axios.put("https://localhost:7130/api/Pensioner/UpdatePensioner", d11
        ).then((response) => {
            console.log(response);
            if (response.status === 200) {
                alert("You Have Updated  Your Details sucessfully");
                Navigate("/individualdetails")

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
                                        <h2 className="text-uppercase text-center mb-5">Update Your Details</h2>

                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" name='First_name' value={fname} onChange={(e) => setFname(e.target.value)} autoComplete="given-name" />
                                                <label className="form-label" htmlFor="form3Example1cg">First Name</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example1cg" className="form-control form-control-lg" name='Last_name' value={lname} onChange={(e) => setLname(e.target.value)} />
                                                <label className="form-label" htmlFor="form2Example1cg">Last Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form5Example1cg" className="form-control form-control-lg" name='Pensioner_Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                                                <label className="form-label" htmlFor="form5Example1cg">Password</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="date" id="dob" className="form-control form-control-lg" name='Dob' value={Dob} onChange={(e) => setDOB(e.target.value)} />
                                                <label className="form-label" htmlFor="dob">DOB</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="date" id="doj" className="form-control form-control-lg" name='Doj' value={Doj} onChange={(e) => setDOJ(e.target.value)} />
                                                <label className="form-label" htmlFor="doj">DOJ</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="date" id="dor" className="form-control form-control-lg" name='Retirement_date' value={rdate} onChange={(e) => setRdate(e.target.value)} />
                                                <label className="form-label" htmlFor="dor">Retirement Date</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="number" id="formSalary" className="form-control form-control-lg" name='Salary' value={sal} onChange={(e) => setSal(e.target.value)} />
                                                <label className="form-label" htmlFor="formSalary">Salary</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <select id="formGender" className="form-select form-select-lg" name='Gender' value={gen} onChange={(e) => setGen(e.target.value)}>
                                                    <option value="">Select gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                                <label className="form-label" htmlFor="formGender">Gender</label>
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
