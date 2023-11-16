import React, { Component } from "react";
import Button from "./Button";

const styles = {
  product: {
    border: "1px solid #eee",
    boxShadow: "0  5px 5px rgba(0, 0, 0, 0.1)",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  img: {
    width: "100%",
  },
};
class Product extends Component {
  render() {
    const { product, addCart } = this.props;
    return (
      <div style={styles.product}>
        <img style={styles.img} alt={product.name} src={product.img} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Button onClick={() => addCart(product)}>Agregar al carro</Button>
      </div>
    );
  }
}

export default Product;
