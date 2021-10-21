#Organisation du code

#Les components

Les components sont dans le dossier 'src/component'. Tous les components ont un dossier.

Explications chaque component:

cardCart -> kebab présent dans le panier. Ce componant permet d'afficher et de modifier une quantité dans le panier.

cardChoiceGarnish -> Affiche une garniture. Ce compenent permet de selectionner une garniture.

CardPremadeKebab -> Affiche le nom et la composition d'un kebab préfait. Permet d'ajouter un kebab dans le panier

Cart -> Récupère les différents kebabs dans le panier et les affiche avec le component cardCart

ChoiceGarnish -> Récupère au fur et à mesure les ingrédients à choisir pour la compisition d'un kebab. 

ChoicePremadeKebab -> récupère la liste des kebabs préfaits et les affiche grace au component CardPremadeKebab

Menu -> Affiche le menu des selections. Permet d'accéder à la composition d'un kebab ou des kebabs préfaits

OrderInProgress -> écran lorsqu'une commande est lancée

RecapOrder -> récapitule, le kebab avant d'etre ajouter dans le panier


#le context - kebabContext

Cette application utilise un context. Le context (KebabContext.js) est dans le dossier racine.

#initialState

Ce context contient un ensemble de donnée important pour le fonctionnement de l'application.

Voici la liste des inforamtions:
cart -> c'est le panier, contient l'ensemble des kebabs commandés.
tempKebab -> contient le kebab en cours de composition.
tempChoice -> contient la garniture en cours de selection.
listChoix -> liste des choix et des règles ou la composition d'un kebab.
premadeKebab -> Contient la liste des kebabs préfaits.

#les différentes routes

/premadeKebab -> accéder à la selection des kebabs préfaits
/makeMyKebab -> accéder à la configuration d'un kebab
/cart -> accéder au panier
/recapOrder -> accéder au recapitulatif d'un kebab avant la commande
/orderInProgress -> accéder à la page pour que le maitre kebabier puisse faire les kébabs
/ -> page d'accueil
