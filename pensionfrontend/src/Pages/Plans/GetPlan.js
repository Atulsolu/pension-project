import { useEffect,useState } from "react"
import axios from 'axios';
import  '../../App.css';
import displayPlan from "./DisplayPlan";
import JWT from "jwt-decode";
import { useNavigate } from "react-router-dom";
const GetPlan= () =>{
    const[List,setList]=useState([]);
    const navigate=useNavigate();
    const abc = localStorage.getItem('admintoken');
    var decoded = JWT(abc);
    useEffect(()=>{
        axios.get(`https://localhost:7130/api/RetirementPlan/GettingPlan`,decoded,{
            headers:{
                'Authorization': `Bearer ${abc}`
            }
            })
            .then((res)=>{
                console.log(res.data);
                setList(res.data);
    
        })
    
        },[]);
        console.log(List);
        const planlist=List.map(menu=>
            <displayPlan
            pid={menu.PlanId}
            pname={menu.PlanName}
            pdesc={menu.planDescription}
            />);
            return(
                <>
                {displayPlan}
                </>);
    
}
export default GetPlan;