import React, { useEffect, useState } from "react"; 
import Admnav from "../../Layout/AdminNav"
import axios from 'axios';
import '../../App.css';
import DisplayPlan from "./DisplayPlan";

const GetPlan = () => {
  const [list, setList] = useState([]);
  const abc = localStorage.getItem('admintoken');

  useEffect(() => {
    axios.get("https://localhost:7130/api/RetirementPlan/GettingPlan", {
      headers: {
        'Authorization': `Bearer ${abc}`
      }
    })
    .then((res) => {
      console.log(res.data);
      setList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  console.log(list);


  const planList = list.map((menu) => (
    <DisplayPlan
     
      planId={menu.planId}
      planName={menu.planName}
      planDescription={menu.planDescription}
      
    />
  ));

  return (
    <>
    <Admnav></Admnav>
      <ul>
        {planList}
      </ul>
    </>
  );
}

export default GetPlan;
