import React from 'react'
import '../cardChoiceGarnish/cardChoiceGarnish.css'

export default function ElemCardChoiceGarnish(props) {
    const [select, setSelect] = React.useState("no-selected")
    function selectGarnish() {
        select === "selected" ? setSelect("no-selected") : setSelect("selected")
    }
    return (
        <div>
            <div>
                {
                    <p onClick={() => selectGarnish(props.elem)} className={select}>{props.elem}</p>
                }
            </div>
        </div >
    );
}