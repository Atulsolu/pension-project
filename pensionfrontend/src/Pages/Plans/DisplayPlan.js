import React from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const DisplayPlan = (props) => {
  const abc = localStorage.getItem('admintoken');
  const navigate=useNavigate();

  const deletePlan = () => {
    axios.delete(`https://localhost:7130/api/RetirementPlan/DeletePlan/${props.planId}`, {
      headers: {
        'Authorization': `Bearer ${abc}`
      }
    })
    .then((response) => {
      alert('Plan deleted successfully');
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  function updatePlan(){
        localStorage.setItem('planid',props.planId);
        navigate('/updateplan');
  }




  return (
    <>
      <li className="pensioner">
        <div>
          <h3>{props.planId} {props.planName}</h3>
          <div className="description"> Pensioner got {props.planDescription} % of salary</div>
          <form className="form">
            <button className="mx-2" onClick={deletePlan}>Delete</button>
            <button onClick={updatePlan}>Update</button>
          </form>
        </div>
      </li>
    </>
  );
}

export default DisplayPlan;
