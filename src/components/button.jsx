import React from "react";

function button({onClick}){
    return(
        <button onClick={onClick} className="view -product-button">
            View Product
        </button>
    );
}
export default button;