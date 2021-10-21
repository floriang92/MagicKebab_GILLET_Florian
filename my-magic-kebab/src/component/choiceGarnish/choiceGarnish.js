import React, { useState } from 'react'
import { KebabContext } from '../../KebabContext';
import CardChoiceGarnish from '../cardChoiceGarnish/cardChoiceGarnish';
import { useHistory } from "react-router-dom";


export default function ChoiceGarnish() {
    const { kebabState } = React.useContext(KebabContext);
    const [counter, setCounter] = useState(1)
    const [choiceGarnishList] = useState(kebabState.listChoix)
    const [choiceGarnish, setChoiceGarnish] = useState(choiceGarnishList[0])
    let history = useHistory();

    function handleClick() {
        if (kebabState.tempChoice.length >= choiceGarnish.minSelect) {
            setCounter(counter + 1)
            setChoiceGarnish(choiceGarnishList[counter])
            const choice = kebabState.tempChoice.join(' ')
            kebabState.tempKebab.push(choice)
            kebabState.tempChoice = []
            if (counter == (kebabState.listChoix.length)) {
                history.replace("/RecapOrder")
            }
        }
    }

    return (
        <div>
            <CardChoiceGarnish garnishInfo={choiceGarnish} />
            <button onClick={() => handleClick()}>Garniture suivante</button>
        </div>
    );
}