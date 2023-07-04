import { useEffect, useState } from "react";
import Pennav from "../../Layout/PensionerNav"
import axios from 'axios';
import DisplayPayment from "./DisplayPayment";
import JWT from 'jwt-decode';
import '../../App.css';

const GetPayment = () => {
    const [list, setList] = useState([]);
    const p = localStorage.getItem("pensionertoken");
    const d = JWT(p);

    useEffect(() => {
        axios.get(`https://localhost:7130/api/PensionPayout/(PensionerPayment)/${d.PensionerId}`)
            .then((res) => {
                console.log(res.data);
                setList(res.data);
            })
            .catch((error) => {
                alert(' No Payment Found.');
                console.log(error);
            });
    }, []);

    const menuList = list.map(menu => (
        <DisplayPayment
            key={menu.payoutId}
            pid={menu.payoutId}
            pensionerid={menu.pensionerId}
            pname={menu.pensionerName}
            amount={menu.payoutAmount}
            date={menu.payoutDate}
        />
    ));

    return (
        <>
             <Pennav/>
            {menuList}
        </>
    );
};

export default GetPayment;
