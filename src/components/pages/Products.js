import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../Item/ItemDetailContainer';

const Products = () => {
  let { id } = useParams();
  return (
    <main>
      <ItemDetailContainer id={id} />
    </main>
  );
};

export default Products;
