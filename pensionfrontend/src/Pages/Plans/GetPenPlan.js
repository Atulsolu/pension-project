import React from 'react'
import JWT from 'jwt-decode';
import DisplayPensPlan from "./DisplayPensPlan";
import axios from 'axios';
import { useState,useEffect } from 'react';
import Pennav from "../../Layout/PensionerNav"
const GetPenPlan = () => {
const p=localStorage.getItem("pensionertoken");
const [list, setList] = useState([]);
console.log(p);
const d= JWT(p);
console.log(d.PensionerId);
useEffect(() => {
    axios.get(`https://localhost:7130/api/Pensioner/CheckingPlan?PensionerId=${d.PensionerId}`, {

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
    <DisplayPensPlan
     
      planId={menu.planId}
      planName={menu.planName}
      planDescription={menu.planDescription}
      
    />
  ));

  return (
    <>
    <Pennav></Pennav>
        {planList}
    </>
  );
}
export default GetPenPlan;