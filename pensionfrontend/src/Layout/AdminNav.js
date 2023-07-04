import { NavLink ,useNavigate, Outlet } from 'react-router-dom';
import {IoMdLogOut} from "react-icons/io";
export default function AdminNav() {
    const Navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("admintoken");
        Navigate('/');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand" >Admin Page</div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <NavLink className="nav-link" to="/adminpage">Home</NavLink>
                            </li>
                            <li className="nav-item ms-auto">
                                <button className="nav-link  " onClick={logout}>Logout <IoMdLogOut/></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}