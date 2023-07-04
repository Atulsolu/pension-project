import { NavLink,useNavigate, Outlet } from 'react-router-dom';
import {IoMdLogOut} from "react-icons/io";
export default function PensionerNav(){
    const Navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("pensionertoken");
        Navigate('/');
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand" >Pensioner Page</div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                                <NavLink className="nav-link" to="/pensionerpage">Home</NavLink>
                            </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={logout}>Logout <IoMdLogOut/></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </>
    );
}