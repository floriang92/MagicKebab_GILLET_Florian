import React from 'react'

const KebabContext = React.createContext();
const localState = JSON.parse(localStorage.getItem('kebabState'));

const initialState = {
    cart: [],
    tempKebab: [],
    tempChoice: [],
    listChoix: [
        {
            titre: "Choix du pain",
            choix: ["pain", "tortillas", "baguette"],
            minSelect: 1,
            maxSelect: 1,
        },
        {
            titre: "Choix de la viande",
            choix: ["viandes", "Tofu"],
            minSelect: 1,
            maxSelect: 1,
        },
        {
            titre: "Choix garnitures",
            choix: ["Salade", "tomates", "oignon"],
            minSelect: 0,
            maxSelect: 3,
        },
        {
            titre: "Choix des sauces",
            choix: ["blanche", "samourai", "ketchup", "mayo", "biggy", "BBQ"],
            minSelect: 0,
            maxSelect: 2,
        }
    ],
    premadeKebab: [
        {
            name: "Le Classique",
            listGarnish: "Pain viande salade tomates oignons blanche"
        },
        {
            name: "Le Vege",
            listGarnish: "Pain tofu blanche"
        },
        {
            name: "Le BBQ",
            listGarnish: "Pain viande salade tomates oignons bbq"
        }
    ]
}

function kebabReducer(state, action) {
    switch (action.type) {
        case 'addToCart': {
            let tempCart = state.cart
            tempCart.push(action.payload)
            return {
                ...state,
                cart: [...tempCart]
            };
        }
        default: {
            return state;
        }
    }
}

function KebabProvider({ children }) {
    const [kebabState, kebabDispatch] = React.useReducer(kebabReducer, localState || initialState)

    React.useEffect(() => {
        localStorage.setItem('kebabState', JSON.stringify(kebabState))
    }, [kebabState])

    return (
        <KebabContext.Provider value={{ kebabState, kebabDispatch }}>
            {children}
        </KebabContext.Provider>
    )
}

export { KebabProvider, KebabContext }