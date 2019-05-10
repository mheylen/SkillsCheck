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
      productList: [],
    };
  };
componentDidMount(){
  this.getAllProducts();
};


getAllProducts = () => {
  axios
  .get("/api/products").then(response => {
    this.setState({
      ProductList: response.data
    })
  })
}

addToList = item => {
 const {productList} = this.state
 
  const addItem = {
   id: item.id,
   name: item.name,
   image_path: item.image_path,
   price: item.price
  }; 
  
  axios
  .post('/api/products', addItem).then(res => {
    this.setState({
      productList: res.data
    });
  });
};

  render() {
    const {ProductList} = this.state
    const mappedProducts = productList.map(productList => {
      return (
        <div key={productList.id}>
        <h1>{productList.name}</h1>
        <h2>{productList.price}</h2>
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
