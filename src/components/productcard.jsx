import React from "react";
import button from "../components/button";
import productImage from "../assets/Doraemon_Home_set.jpeg";

function productcard(){
    function handleClick(){
        alert('View Product Clicked');
    }
    return(
        <div className="product-card"style={{border: '1px solid #css',padding: '16px', borderRadius: '8px'}}>
            <img
             src={productImage}
             alt = "Product"
             style={{width: '100%', borderRadius: '8px'}}
        />
        <h3>Doraemon Home Set</h3>
        <p>Price: 1500$</p>
        <button onClick={handleClick}/>
        </div>
    );
}
export default productcard;