import React from "react";
import "./productInput.css"

export default function ProductInput(props){
    let mappedProducts = props.productInput.map(item => {
        return (
        <div>
            <div className="productInput-container" key={item.id}>
                <p>Image URL:</p>
                <input type="text" value> ==$0 </input>
                <p>Product Name:</p>
                <input type="text" value> == $0</input>
                <img src={item.image_path} alt=""/>
                <p>Price:</p>
                <h2>${item.price}.00</h2>
                <button onClick={()=> props.addToList(item)} >Add to Inventory</button>
            </div>
            <div className= "form_button_box">
                <button> Cancel </button>
                <button>Add to Inventory </button>
            </div>
        </div>
            );
        });
        return <div className= "mapped-container"> {mappedProducts} </div>
    }