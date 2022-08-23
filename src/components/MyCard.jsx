import { useState } from "react";


function MyCard(props) {

    const [cardTitle, setCardTitle] = useState(props.cardTitle);
    const [counter, setCounter] = useState(0);

    const handleClick = (e) => {
        e.preventDefault();
        setCardTitle("Nouveau titre");
        const newCounterValue = counter + 1;
        setCounter(newCounterValue);
    }

    return (
        <>
            <div className="card">
                <img src={props.imageSrc} className="card-img-top" alt="Images" />
                <div className="card-body">
                    <h5 className="card-title">{cardTitle} / {counter}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary" onClick={handleClick}>En savoir +</a>
                </div>
            </div>
        </>
    );
}

export default MyCard;