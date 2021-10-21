import React from 'react'
import { KebabContext } from '../../KebabContext';
import CardCart from '../cardCart/cardCart';
import { useHistory } from "react-router-dom";
import './cart.css'

export default function Cart() {
    const { kebabState } = React.useContext(KebabContext);
    let history = useHistory();

    function commander() {
        history.replace("/orderInProgress")
    }

    return (
        <div className="cart">
            {
                kebabState.cart.map((kebab, index) => {
                    return <CardCart key={index} kebab={kebab} />
                })
            }

            <button onClick={() => commander()}>Commander !</button>
        </div>
    );
}