
import '../../App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const DisplayIndividual = (props) => {
    console.log(props.data);
    const navigate = useNavigate();
    console.log(props);

    function Updatedetails() {
        navigate('/updatedetails');
    }
    return (
        <>
            
            <li className="pensioner">
                <div>
                    <h3>{props.pid} {props.fname} {props.lname}</h3>
                    <div className="description"><b>Email-id:-</b>{props.email}</div>
                    <div className="description"><b>Gender:-</b>{props.gen}</div>
                    <div className="description"><b>DOB:-</b>{props.dob}</div>
                    <div className="description"><b>DOJ:-</b>{props.doj}</div>
                    <div className="description"><b>Retirement Date:-</b>{props.rdate}</div>
                    <div className="description"><b>Salary:-</b>{props.sal}</div>
                    <form className="form">
                        <button onClick={Updatedetails}>Update</button>
                    </form>
                </div>
            </li>

        </>
    );
}
export default DisplayIndividual;