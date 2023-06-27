import '../../App.css';
import { useRef } from 'react';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const DisplayPlan = (props) => {
    console.log(props.data);
    const abc = localStorage.getItem('admintoken');
    console.log(props);
    function del(){
    axios.delete(`https://localhost:7130/api/RetirementPlan/DeletePlan/${props.pid}`, {

        headers:{

            'Authorization': `Bearer ${abc}`

        }

    })
    .then((response) => {
            alert('Plan deleted successfully');
            console.log(response);
        });
    }
return (
    <>

        <li className="meal">
            <div>
                <h3>{props.pid} {props.pname}</h3>
                <div className="description">{props.pdesc}</div>
                <form className="form">
                    <button className="mx-2" onClick={del}>Delete</button>
                    <button >Update</button>
                </form>
            </div>
        </li>

    </>
);

}
export default DisplayPlan;