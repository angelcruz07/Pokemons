import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const { products, addCart } = this.props;
    return (
      <div>
        {products.map((product) => (
          <Product addCart={addCart} key={product.name} product={product} />
        ))}
      </div>
    );
  }
}

export default Products;
