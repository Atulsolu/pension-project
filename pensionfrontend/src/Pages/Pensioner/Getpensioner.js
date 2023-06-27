import { useEffect,useState } from "react"
import axios from 'axios';
import Pensionerdisplay from './Pensionerdisplay';
import  '../../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import JWT from "jwt-decode";
const Getpensioner = () => {
    const [List,setList]=useState([]);
    const navigate=useNavigate();
    const abc=localStorage.getItem('admintoken');
    var decoded = JWT(abc);
    useEffect(()=>{
        axios.get(`https://localhost:7130/api/Pensioner/PensionerList`,decoded,{
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
    const menulist=List.map(menu=>
        <Pensionerdisplay
        pid={menu.pensionerId}
        fname={menu.first_name}
        lname={menu.last_name}
         gen={menu.gender}
         email={menu.pensioner_Email}
         dob={menu.dOB}
         doj={menu.dOJ}
         rdate={menu.retirement_date}
         sal={menu.salary}
        />);

        //  function rr(){

        //     navigate('/simplemenus');

        //  }

        //  function rr1(){

        //     navigate('/jmyorder');

        //  }
 return (
    <>
{menulist}
</>) ;
}
export default Getpensioner;