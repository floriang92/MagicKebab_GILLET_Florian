import React, { useState } from 'react'

export default function CardCart({ kebab }) {
    const { name, listGarnish, quantity } = kebab
    const [newQuantity, setNewQuantity] = useState(quantity)

    function getNewQuantity(value) {
        if ((newQuantity + value) <= 0) {
            setNewQuantity(0)
        } else {
            setNewQuantity(newQuantity + value)
        }
    }
    return (
        <div>
            <h2>{name} * {newQuantity}</h2>
            <p>{listGarnish}</p>
            <button onClick={() => getNewQuantity(1)}>+1</button>
            <button onClick={() => getNewQuantity(-1)}>-1</button>
        </div>
    );
}