import React from 'react';
import ItemList from './Item/ItemList';
import '../components/ItemListContainer.css'

const ItemListContainer = () => {
  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">Nuestros Productos</h2>

      <ItemList />
    </section>
  );
}

export default ItemListContainer