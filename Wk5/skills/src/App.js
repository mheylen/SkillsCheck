import React, { Component } from 'react';
import Header from './components/header/header';
import ProductInput from './components/productInput/productInput'
import ProductList from './components/productList/productList'
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      productInput: [],
      productsList: [],
    };
  };
componentDidMount(){
  this.getAllProducts();
};


getAllProducts = () => {
  axios
  .get("/api/products").then(response => {
    this.setState({
      productsList: response.data
    })
  })
}

addToList = item => {
 const {productsList} = this.state
  const addItem = {
   id: item.id,
   name: item.name,
   image_path: item.image_path,
   price: item.price
  }; 
};

  render() {
    const {productsList} = this.state
    const mappedProducts = productsList.map(productsList => {
      return (
        <div key={productsList.id}>
        <h1>{productsList.name}</h1>
        <h2>{productsList.price}</h2>
        </div>
      )
    })
    return (
      <div >
        <Header>This is my header</Header>
        <ProductInput
        productInput={this.state.productInput} />
        <ProductList
        productList={this.state.productList}
        addToList={this.addToList} />
        
      </div>
    );
  }
}

export default App;
