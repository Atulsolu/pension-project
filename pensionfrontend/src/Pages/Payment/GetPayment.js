import { useEffect,useState } from "react"
import axios from 'axios';
import DisplayPayment from "./DisplayPayment";
import JWT from 'jwt-decode';
import  '../../App.css';
const GetPayment = () => {
    const [List,setList]=useState([]);
    const p=localStorage.getItem("pensionertoken");
    console.log(p);
    const d= JWT(p);
    console.log(d.PensionerId);
    useEffect(()=>{
        axios.get(`https://localhost:7130/api/PensionPayout/(PensionerPayment)/${d.pensionerid}`)
        .then((res)=>{
            console.log(res.data);
            setList(res.data);
        })
    },[]);
    console.log(List);
    const menulist=List.map(menu=>
        <DisplayPayment
        pid={menu.payoutId}
        pensionerid={menu.pensionerId}
        pname={menu.pensionerName}
         amount={menu.payoutAmount}
         date={menu.payoutDate}
        />);
        return (
            <>
        {menulist}
        </>) ;        
}
export default GetPayment;
