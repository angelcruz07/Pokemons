import React, { Component } from "react";
import Products from "./components/Products";
class App extends Component {
  state = {
    products: [
      { name: "Tomate", price: 1500, img: "/products/tomates.jpg" },
      { name: "Arbejas", price: 1500, img: "/products/arbejas.jpg" },
      { name: "Lechuga", price: 1500, img: "/products/lechuga.jpg" },
    ],
  };
  render() {
    return (
      <div>
        <Products
          addCart={() => console.log("No hace nada")}
          products={this.state.products}
        />
      </div>
    );
  }
}
export default App;
