import React, { useState } from "react";

const StoreItem = (props) => {
  const [stock, setStock] = useState(0);

  const changeStock = (event) => {
    setStock(event.target.value);
  };

  const incrementStock = () => {
    setStock(stock + 1);
  };

  const decrementStock = () => {
    if (stock > 0) {
      setStock(stock - 1);
    } else {
      setStock(0);
    }
  };

  return (
    <div className="container cardItem">
      <div className="info">
        <img src={props.card.imageUrl} alt={props.card.name} />
      </div>
      <div className="buyCard">
        <h6>Price: {props.card.cmc * 4} Zinos</h6>
        <div className="input-field">
          <input
            type="number"
            value={stock}
            min="0"
            className="validate"
            onChange={changeStock}
          ></input>
        </div>
        <button type="button" className="btn" onClick={decrementStock}>
          -
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.changeCart(stock, props.card);
            setStock(0);
          }}
        >
          Add to cart
        </button>
        <button type="button" className="btn" onClick={incrementStock}>
          +
        </button>
        <br />
      </div>
    </div>
  );
};
export default StoreItem;
