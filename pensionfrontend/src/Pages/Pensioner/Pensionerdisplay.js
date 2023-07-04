
import '../../App.css';
import axios from 'axios';
import React from 'react';
const Pensionerdisplay = (props) => {
    console.log(props.data);
    const abc = localStorage.getItem('admintoken');
    console.log(props);
    function del() {

        axios.delete(`https://localhost:7130/api/Pensioner/DeletePensioner/${props.pid}`, {

            headers: {

                'Authorization': `Bearer ${abc}`
            }

        })
            .then((response) => {
                alert('Pensioner deleted successfully');
                console.log(response);
            });
    }
    return (
        <>
            <li className="pensioner">
                <div>
                    <h3><b>Id:-</b>{props.pid} </h3>
                    <h3><b>Name:-</b>{props.fname} {props.lname}</h3>
                    <div className="description"><b>Email:-</b>{props.email}</div>
                    <div className="description"><b>Gender:-</b>{props.gen}</div>
                    <form className="form">
                        <button className="mx-2" onClick={del}>Delete</button>
                    </form>
                </div>
            </li>

        </>
    );
}
export default Pensionerdisplay;