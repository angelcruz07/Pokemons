import React, { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Title from "./components/Title";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    products: [
      { name: "Tomate", price: 1500, img: "/products/tomates.jpg" },
      { name: "Arbejas", price: 3500, img: "/products/arbejas.jpg" },
      { name: "Lechuga", price: 2300, img: "/products/lechuga.jpg" },
    ],
    cart: [
      // { name: "Tomate", price: 1500, img: "/products/tomates.jpg", amount: 1 },
    ],
  };

  addCart = (product) => {
    const { cart } = this.state;
    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((x) =>
        x.name === product.name
          ? {
              ...x,
              amount: x.amount + 1,
            }
          : x
      );
      return this.setState({ cart: newCart });
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1,
      }),
    });
  };

  render() {
    console.log(this.state.cart);
    return (
      <div>
        <NavBar />
        <Layout>
          <Title />
          <Products addCart={this.addCart} products={this.state.products} />
        </Layout>
      </div>
    );
  }
}
export default App;
