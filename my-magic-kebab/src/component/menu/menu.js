import React from 'react'
import { useHistory } from "react-router-dom";

export default function Menu() {
    let history = useHistory();

    function handleClick(route) {
        if (route == "makeMyKebab") {
            history.replace("/makeMyKebab")
        } else if (route == "premadeKebab") {
            history.replace("/premadeKebab")
        }
    }

    return (
        <div>
            <h2>Bienvenue chez Magic Kebab</h2>
            <div>
                <button onClick={() => handleClick("makeMyKebab")}>Configurer mon kebab</button>
                <button onClick={() => handleClick("premadeKebab")}>Les kebabs préfaits</button>
            </div>
        </div>
    );
}