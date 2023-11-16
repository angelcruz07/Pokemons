import React, { Component } from "react";

const styles = {
  cartDetails: {
    backgorundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  product: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "1px solid #aaa",
  },
};
class CartDetails extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <div style={styles.cartDetails}>
        <ul style={styles.ul}>
          {cart.map((x) => (
            <li style={styles.product} key={x.name}>
              <img alt={x.name} src={x.img} width="50px" height="32px" />
              {x.name}
              <span>{x.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CartDetails;
