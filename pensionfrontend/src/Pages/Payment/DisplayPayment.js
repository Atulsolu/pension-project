import '../../App.css';

export default function DisplayPayment(props) {
    console.log(props);

    return (
        <>
       
        <li className="pensioner">
            <div>
                <h3>Id:-{props.pensionerid}</h3>
                <h3>  Name:-{props.pname}</h3>
                <div className="description">Payment Id:-{props.pid}</div>
                <div> <b>Amount:-</b>{props.amount} </div>
                <div className="date"><b>Payment Date:-</b>{props.date}</div>
            </div>
        </li>
        </>
    );
}
