import React from "react";
import CardPremadeKebab from "../cardPremadeKebab/cardPremadeKebab";
import { KebabContext } from '../../KebabContext';

export default function ChoicePremadeKebab() {
    const { kebabState } = React.useContext(KebabContext);
    const listKebab = kebabState.premadeKebab
    return (
        <div>
            <h2>Liste des kebabs</h2>
            {
                listKebab.map((kebab, index) => {
                    return <CardPremadeKebab key={index} kebab={kebab}></CardPremadeKebab>
                })
            }
        </div>
    );
}