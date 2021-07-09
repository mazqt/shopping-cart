import StoreItem from "./StoreItem";
import Cart from "./Cart";

const Shop = (props) => {
  return (
    <div className="row">
      <div className="col s10" id="Cards">
        <div className="container center">
          <ul>
            {props.cards.map((card) => {
              return (
                <li>
                  <StoreItem card={card} changeCart={props.changeCart} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col s2 blue" id="Cart">
        <div className="container center">
          <Cart cartTotal={props.cartTotal} clearCart={props.clearCart} />
        </div>
      </div>
    </div>
  );
};
export default Shop;
