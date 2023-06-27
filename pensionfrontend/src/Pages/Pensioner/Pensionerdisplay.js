
import '../../App.css';
import { useRef } from 'react';
import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Pensionerdisplay=(props)=>{
    console.log(props.data);
    const qtyref=useRef(0);
    const navigate=useNavigate();
    const abc=localStorage.getItem('admintoken');
    console.log(props);
//  function rr(){
//              const nn={
//                 PensionerId:props.pid,
//                 First_name: props.fname,
//                 Last_name: props.lname,
//                 Gender:props.gen,
//                 Pensioner_Email:props.email,
//                 DOB:props.dob,
//                 DOJ:props.doj,
//                 Retirement_date:props.rdate,
//                 Salary:props.sal,
             

//          };
//                 axios.put(`https://localhost:7130/api/Pensioner/UpdatePensioner`,nn,{

//             headers:{

//                 'Authorization': `Bearer ${abc}`

//             }

//         })

//         .then((response) =>{

//             alert('Order changed successfully');

//             console.log(response);

        

//         });

//  }
    //     axios.put(`https://localhost:7126/api/Order/Changeqty/${nn.itemId}/${nn.qty}`,nn,{

    //         headers:{

    //             'Authorization': `Bearer ${abc}`

    //         }

    //     })

    //     .then((response) =>{

    //         alert('Order changed successfully');

    //         console.log(response);

    //         navigate('/jmyorder');

    //     });

    ////     console.log(nn);

     

     function rr(){

    //     const nn={

    //        itemid: parseInt(props.data.id),

    //   };

       axios.delete(`https://localhost:7130/api/Pensioner/DeletePensioner/${props.pid}`,{

            headers:{

                 'Authorization': `Bearer ${abc}`

            }

       })

        .then((response) =>{
            alert('Order deleted successfully');
     console.log(response);
        });
    }
return (
    <>
    <li className="meal">
<div>
    <h3>{props.pid} {props.fname} {props.lname}</h3>
    <div className="description">{props.email}</div>
    <div className="price">{props.gen}</div>
    <form className="form">       
            <button className="mx-2" onClick={rr}>Delete</button>
            <button >Update</button>
    </form>
</div>
</li>

    </>
    );
}
export default Pensionerdisplay;