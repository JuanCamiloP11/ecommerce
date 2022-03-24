import React from "react";
import ListProducts from "./ListProduts/ListProducts";

function ItemListContainer(){
    return(
        <div className="mainItemListContainer">
            <h1>Nuestros Productos</h1>
            <ListProducts/>
        </div>
    )
}

export default ItemListContainer;