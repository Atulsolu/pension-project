import { useEffect,useState } from "react"
import Pennav from "../../Layout/PensionerNav";
import axios from 'axios';
import DisplayBeneficary from './DisplayBeneficary';
import  '../../App.css';
import { useNavigate } from "react-router-dom";
import JWT from "jwt-decode";
const GetBeneficary = () => {
    const [List,setList]=useState([]);
    const navigate = useNavigate();
    const abc=localStorage.getItem("pensionertoken");
    console.log(abc);
    var decoded=JWT(abc)
    const d= JWT(abc);
    console.log(d.PensionerId);
    useEffect(()=>{
        axios.get(`https://localhost:7130/api/Beneficary/GetBeneficary?PensionerId=${d.PensionerId}`,decoded,{
            headers:{
                'Authorization': `Bearer ${abc}`
            }

        })
        .then((res)=>{
            console.log(res.data);
            setList(res.data);

    }).catch((error) => {
          alert(' No Beneficary Found.');
          navigate('/pensionerpage');
        console.log(error);
      })

    },[]);
    console.log(List);
    const beneficarylist=List.map(menu=>
        <DisplayBeneficary
        bid={menu.beneficaryId}
        fname={menu.beneficaryFirstName}
        lname={menu.beneficaryLastName}
        rel={menu.beneficaryRelation}
        />);
 return (
    <>
    <Pennav></Pennav>
{beneficarylist}
</>) ;
}
export default GetBeneficary;