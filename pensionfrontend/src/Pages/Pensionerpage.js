import '../Styles/pensionerpage.css'; 
import '../Styles/pensionerpage.css'; 
import { NavLink } from 'react-router-dom';
import PenNav from "../Layout/PensionerNav"
export default function Pensionerpage() {
    return (
        <>
            <PenNav></PenNav>
            <h1> Welcome to Pensioner Page</h1>
            <div class="container">
                <div class="box-container">
                    <NavLink className="box" to="/beneficary"><h3>Beneficary</h3>
                        <p>Adding Beneficary .</p></NavLink>
                    <NavLink className="box" to="/getpenplan"><h3>My Plan</h3>
                        <p>Checking my own Plan</p>
                    </NavLink>
                    <NavLink className="box" to="/getpayment"><h3>My Payment</h3>
                        <p>Checking My Payment Details</p></NavLink>
                    <NavLink className="box" to="/getbeneficary"><h3>More</h3><p>Getting Beneficary Details.Update and Delete</p>
                    </NavLink>
                    <NavLink className="box" to="/individualdetails"><h3>My Details</h3><p>Getting all details of a pensioner</p>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
