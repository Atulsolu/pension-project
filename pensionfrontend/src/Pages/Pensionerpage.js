import '../Styles/pensionerpage.css'; 
import '../Styles/pensionerpage.css'; 
import { NavLink } from 'react-router-dom';
export default function Pensionerpage() {
    return (
        <>
            <h1> Welcome to Pensioner Page</h1>
            <div class="container">
                <div class="box-container">
                    <NavLink className="box" to="/beneficary"><h3>Beneficary</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></NavLink>
                    <NavLink className="box" to="/plan"><h3>Plans</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </NavLink>
                    <NavLink className="box" to="/getpayment"><h3>Payment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></NavLink>
                    <NavLink className="box" to="/"><h3>More</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
