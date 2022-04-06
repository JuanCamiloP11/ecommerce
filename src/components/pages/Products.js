import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../Item/ItemList';

const Products = () => {
  let { id } = useParams();
  return (
    <main>
      <h1 className="item-list-container__title">PRODUCTOS</h1>
      <ItemList id={id} />
    </main>
  );
};

export default Products;
