import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [cartTotal, setCartTotal] = useState([0, 0]);
  const [cart, setCart] = useState({});

  const mtg = require("mtgsdk");

  async function fetchCards() {
    const data = await mtg.card.where({ name: "Jace", contains: "imageUrl" });
    setCards(data);
  }

  useEffect(() => {
    fetchCards();
  }, []);

  const changeCart = (stock, card) => {
    if (cart[card.multiverseid] != null) {
      let prevStock = parseInt(cart[card.multiverseid][0]);
      setCart({
        ...cart,
        [card.multiverseid]: [stock + prevStock, card],
      });
    } else {
      setCart({
        ...cart,
        [card.multiverseid]: [stock, card],
      });
    }
    let increase = stock * card.cmc * 4;
    setCartTotal([cartTotal[0] + stock, cartTotal[1] + increase]);
  };

  const clearCart = () => {
    setCart({});
    setCartTotal([0, 0]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/shop"
            render={() => (
              <Shop
                cards={cards}
                changeCart={changeCart}
                cartTotal={cartTotal}
                clearCart={clearCart}
              />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
