import React from "react";
import "./productList.css";


export default function productList(props){

let mappedProduct = props.productList.map(item => {
    return (
        
        
        <div key={item.id}>
            
            <img src={item.image_path} alt=""/>
            <h2>${item.price}.00</h2>
            <button onClick={() => props.productDelete(item.id)}>Remove</button>
            <button onClick={() => props.productDelete(item.id)}>Remove</button>
            <h3>x{item.quantity}</h3>
            
        </div>
    );
})}