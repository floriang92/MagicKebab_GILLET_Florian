import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChoicePremadeKebab from './component/choicePremadeKebab/choicePremadeKebab';
import ChoiceGarnish from './component/choiceGarnish/choiceGarnish';
import Cart from './component/cart/cart'
import RecapOrder from './component/recapOrder/recapOrder'
import OrderInProgress from "./component/orderInProgress/orderInProgress";
import Menu from "./component/menu/menu";
import { KebabContext } from './KebabContext';

export default function App() {
  const { kebabState } = React.useContext(KebabContext);
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="main-route-place">
            <Switch>
              <Route exact path="/premadeKebab" component={ChoicePremadeKebab} />
              <Route exact path="/makeMyKebab" component={ChoiceGarnish} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/recapOrder" component={RecapOrder} />
              <Route exact path="/orderInProgress" component={OrderInProgress} />
              <Route exact path="/" component={Menu} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>

      {
        kebabState.cart.length > 0 ? <Cart></Cart> : <div></div>
      }

    </div>
  );
}