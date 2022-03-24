import React from "react";
import Card from "../Card";

const ListProducts = ({children}) => {
    let dataProduct = {
        title: 'Zapatos 1',
        talle: '11',
        price: 200,
        stock: 10
    }
    return(
        <div>
            <h2>{children}</h2>
            <Card data ={dataProduct}/>
        </div>
    )
}
export default ListProducts;