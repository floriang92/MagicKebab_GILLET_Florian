import React from 'react'
import { KebabContext } from '../../KebabContext';
import { useHistory } from "react-router-dom";

export default function RecapOrder() {
    const { kebabState, kebabDispatch } = React.useContext(KebabContext);
    let history = useHistory();

    const listGarnish = kebabState.tempKebab.join(' ')

    function makeNewKebab() {
        let newKebab = {
            listGarnish: listGarnish,
            quantity: 1,
            name: "Kebab personnalisé"
        }
        kebabDispatch({ type: "addToCart", payload: newKebab })
        kebabState.tempKebab = []

        history.replace("/")
    }

    return (
        <div>
            <h2>Récapitulatif du kebab</h2>
            <p>Composition: {listGarnish}</p>
            <button onClick={() => makeNewKebab()}>Ajouter au panier</button>
        </div>
    );
}