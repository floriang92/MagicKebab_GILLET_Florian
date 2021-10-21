import React from 'react'
import './cardChoiceGarnish.css'
import { KebabContext } from '../../KebabContext';
import ElemCardChoiceGarnish from '../elemCardChoiceGarnish/elemCardChoiceGarnish';

export default function CardChoiceGarnish({ garnishInfo }) {
    const { titre, choix } = garnishInfo
    const { kebabState } = React.useContext(KebabContext);


    function selectGarnish(nameGarnish) {
        if (kebabState.tempChoice.indexOf(nameGarnish) != -1) {
            const elemToDelete = kebabState.tempChoice.indexOf(nameGarnish)
            kebabState.tempChoice.splice(elemToDelete, 1)

        } else if (kebabState.tempChoice.length < garnishInfo.maxSelect) {
            kebabState.tempChoice.push(nameGarnish)
        }
    }

    return (
        <div>
            <h2>{titre}</h2>
            <div>
                {
                    choix.map((elem, index) => {
                        return <div onClick={() => selectGarnish(elem)}><ElemCardChoiceGarnish key={index} elem={elem}></ElemCardChoiceGarnish></div>
                    })
                }
            </div>
        </div >
    );
}