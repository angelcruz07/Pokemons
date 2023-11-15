import React, { Component } from "react";
import BubbleAlert from "./BubbleAlert";

const styles = {
  cart: {
    backgroundColor: "#359A2c",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "Pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: "20px",
  },
};
class Cart extends Component {
  render() {
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value="10" />
        </span>
        <button style={styles.cart}>carro</button>
      </div>
    );
  }
}

export default Cart;
