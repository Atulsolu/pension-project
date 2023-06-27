import '../../App.css';
import { useNavigate } from 'react-router-dom';
export default function DisplayPayment(props) {
    console.log(props.data);
    console.log(props);
    return (
        <>
            <li className="meal">
                <div>
                    <h3>{props.pensionerid} {props.pensionerName}</h3>
                    <div className="description">{props.pid} {props.amount}</div>
                    <div className="price">{props.date}</div>
                </div>
            </li>
            <form className="form">
                        <button className="mx-2" onClick="/pensionerpage">Delete</button>
                    </form>

        </>

    );
}