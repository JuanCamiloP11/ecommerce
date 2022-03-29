import React, { useEffect, useState } from 'react';
import Item from './Item.js';
import { productList } from '../ListProduts/datos'
import '../Item/ItemList.css'


const ItemList = () => {
  
  const [products, setProducts] = useState([]);

  
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No se pueden mostrar los productos en este momento');
    }
  };

  
  useEffect(() => {
    getProductsFromDB();
  }, []); 

  return (
    <div className="product-list-container">
      {
        
        products.length ? ( 
          <>
            {
              
              products.map((product) => {
                
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        ) 
      }
    </div>
  );
}

export default ItemList