const Cart = (props) => {
  return (
    <div>
      <h4>{props.cartTotal[1]} Zinos</h4>
      <h4>{props.cartTotal[0]} cards</h4>
      <button
        onClick={() => {
          props.clearCart();
          alert(
            "Your planeswalkers, mages, assistants, and spells will be sent within 3 working days"
          );
        }}
        type="button"
        className="btn"
      >
        Pay
      </button>
      <h5>Finance via Orzhov Loans</h5>
      <button
        onClick={() => {
          props.clearCart();
          alert("The Orzhov always collect their debts... eventually");
        }}
        type="button"
        className="btn"
      >
        Finance
      </button>
      <button
        onClick={props.clearCart}
        type="button"
        className="btn"
        style={{ marginTop: "10px" }}
      >
        Clear cart
      </button>
    </div>
  );
};
export default Cart;
