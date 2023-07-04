import { useEffect, useState } from "react"
import axios from 'axios';
import Pennav from "../../Layout/PensionerNav"
import DisplayIndividual from './DisplayIndividual';
import '../../App.css';
import JWT from "jwt-decode";
const GetIndividual = () => {
    const [List, setList] = useState([]);
    const abc = localStorage.getItem("pensionertoken");
    console.log(abc);
    const d = JWT(abc);
    console.log(d.PensionerId);
    useEffect(() => {
        axios.get(`https://localhost:7130/api/Pensioner/GettingPensionerByid?Pensionerid=${d.PensionerId}`

        ).then((res) => {
            console.log(res.data);
            setList(res.data);

        }).catch((error) => {
            alert(' No Pensioner Found.');
            console.log(error);
        })

    }, []);
    console.log(List);
    const menulist = List.map(menu =>
        <DisplayIndividual
            pid={menu.pensionerId}
            fname={menu.first_name}
            lname={menu.last_name}
            gen={menu.gender}
            email={menu.pensioner_Email}
            dob={menu.dob}
            doj={menu.doj}
            rdate={menu.retirement_date}
            sal={menu.salary}
        />);
    return (
        <>
        <Pennav></Pennav>
            {menulist}
        </>);
}
export default GetIndividual;