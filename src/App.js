import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/Item/ItemList';
import Hero from './components/Hero/Hero';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import Home from './components/pages/Home';
import ContactPage from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Products from './components/pages/Products';
import InfoPage from './components/pages/Info';
import DetailProduct from './components/pages/Detail';


export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/contacto' element={<ContactPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/catalogo/:id' element={<DetailProduct />} />
        <Route path='*' element={<NotFound />} />
                <Route path='/nosotros' element={<InfoPage />} />
      </Routes>
    </BrowserRouter>

     {/* {/* <ItemDetailContainer id={3} /> */}
    </>
  );
}