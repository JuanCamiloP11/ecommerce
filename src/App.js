import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Hero/Hero';
import ItemDetailContainer from './components/Item/ItemDetailContainer';



export default function App() {
  return (
    <>
      <NavBar />
      <Hero title="JK Shoes" />
      <ItemListContainer />

      <ItemDetailContainer id={3} />
    </>
  );
}