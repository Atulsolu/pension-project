import { useEffect, useState } from "react"
import axios from 'axios';
import Admnav from "../../Layout/AdminNav"
import Pensionerdisplay from './Pensionerdisplay';
import '../../App.css';
import JWT from "jwt-decode";
const Getpensioner = () => {
    const [List, setList] = useState([]);
    const abc = localStorage.getItem('admintoken');
    var decoded = JWT(abc);
    useEffect(() => {
        axios.get(`https://localhost:7130/api/Pensioner/PensionerList`, decoded, {
            headers: {
                'Authorization': `Bearer ${abc}`
            }

        })
            .then((res) => {
                console.log(res.data);
                setList(res.data);

            }).catch((error) => {
                alert(' No Pensioner Found.');
                console.log(error);
            })

    }, []);
    console.log(List);
    const pensionerlist = List.map(menu =>
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
            des={menu.planDescription}
        />);


    return (
        <>
        <Admnav></Admnav>
            {pensionerlist}
        </>);
}
export default Getpensioner;