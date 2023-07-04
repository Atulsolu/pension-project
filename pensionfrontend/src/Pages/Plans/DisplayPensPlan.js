import React from 'react'; 
const DisplayPensPlan = (props) => {

    return (
        <>
          <li className="pensioner">
            <div>
              <h3>{props.planId} {props.planName}</h3>
              <div className="description">Pensioner got {props.planDescription} % Of salary</div>
            </div>
          </li>
        </>
      );
    }
    export default DisplayPensPlan;