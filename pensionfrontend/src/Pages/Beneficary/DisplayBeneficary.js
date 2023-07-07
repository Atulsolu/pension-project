
import '../../App.css';
import axios from 'axios';
import Pennav from "../../Layout/PensionerNav"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import JWT from "jwt-decode";
const DisplayBeneficary = (props) => {
    console.log(props.data);
    const navigate = useNavigate();
    const abc = localStorage.getItem("pensionertoken");
    console.log(abc);
    const d = JWT(abc);
    console.log(d.PensionerId);
    console.log(props);
    function rr() {

        axios.delete(`https://localhost:7130/api/Beneficary/DeleteBeneficaryByPensionerId/${d.PensionerId}/${props.bid}`, {

            headers: {

                'Authorization': `Bearer ${abc}`

            }

        })
            .then((response) => {
                alert('Beneficary deleted successfully');
                console.log(response);
            });
    }
    function Updatebeneficary() {
        localStorage.setItem('benid', props.bid);
        navigate('/updatebeneficary');
    }
    return (
        <>
            <li className="pensioner">
                <div>
                    <h3>{props.bid} {props.fname} {props.lname}</h3>
                    <div className="description">{props.rel}</div>
                    <div>
                        <button className="btn btn-danger mx-3 my-2" onClick={rr}>Delete</button>
                        
                        <button  className="btn btn-info"  onClick={Updatebeneficary}>Update</button>
                        
                    </div>
                    
                </div>
            </li>
            


        </>
    );
}
export default DisplayBeneficary;