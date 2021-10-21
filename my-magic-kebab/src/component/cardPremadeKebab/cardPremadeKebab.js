import React from 'react'
import { useContext } from 'react'
import { KebabContext } from '../../KebabContext';

export default function CardPremadeKebab({ kebab }) {
    const { kebabState, kebabDispatch } = useContext(KebabContext);
    const { name, listGarnish } = kebab

    function kebabInList(kebab, nom) {
        return kebab.name == nom;
    }

    function handleClick(value) {
        //Si le burgeur est deja dans le cart
        if ((kebabState.cart.find((kebab) => kebabInList(kebab, value.name))) != undefined) {
            console.log("Kebab dans la liste")
            kebabState.cart.find((kebab) => kebabInList(kebab, value.name)).quantity += 1
            console.log(kebabState.cart)
        } else {       //si pas dans le cart
            value["quantity"] = 1
            kebabDispatch({ type: "addToCart", payload: value })
            console.log(kebabState.cart)
        }
    }
    return (
        <div>
            <h3>{name}</h3>
            <div>
                <p>Composition: {listGarnish}</p>
                <button onClick={() => handleClick(kebab)}>Ajouter au panier {name}</button>
            </div>
        </div>
    );
}