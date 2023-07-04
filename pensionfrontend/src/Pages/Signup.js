import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
import '../Styles/Signup.css';
import { NavLink, useNavigate, } from 'react-router-dom';

export default function Signup() {
  const Navigate=useNavigate();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [Dob, setDOB] = useState('');
  const [gen, setGen] = useState('');
  const [Doj, setDOJ] = useState('');
  const [rdate, setRdate] = useState('');
  const [sal, setSal] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !pass || !Dob || !gen || !Doj || !rdate || !sal) {
      alert('Please fill in all fields.');
      return;
    }
    Axios.post("https://localhost:7130/api/Pensioner/PensionerRegister", {

      first_name: fname,
      last_name: lname,
      pensioner_Email: email,
      pensioner_Password: pass,
      dob: Dob,
      gender: gen,
      doj: Doj,
      retirement_date: rdate,
      salary: sal
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        alert("Pensioner Registered Sucessfully");
        Navigate("/");
      }
      
    }).catch((error) => {
      if (error.response && error.response.status === 409) {
        alert('Pensioner already registered.');
      } else {
        alert('An error occurred. Please try again.');
      }
      console.log(error);
    })

  }

  return (
    <div>
      <section className="vh-100 bg-image">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-15 col-lg-12 col-xl-15">
          <div className="card" style={{borderradius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleSubmit}>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg"  name='First_name' value={fname} onChange={(e) => setFname(e.target.value)} autoComplete="given-name"/>
                  <label className="form-label" for="form3Example1cg">First Name</label>
                </div>
                <div className="form-outline mb-4">
                        <input type="text" id="form2Example1cg" className="form-control form-control-lg" name='Last_name' value={lname} onChange={(e) => setLname(e.target.value)} />
                        <label className="form-label" htmlFor="form2Example1cg">Last Name</label>
                      </div>
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" name='Pensioner_Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <label className="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='Pensioner_Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                  <label className="form-label" for="form3Example4cg">Password</label>
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
                  <button type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <NavLink
                    className="fw-bold text-body" to="/login"><u>Login here</u></NavLink></p>

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
