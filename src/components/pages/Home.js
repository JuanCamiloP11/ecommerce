import React from 'react';
import Hero from '../Hero/Hero';
import ItemListContainer from '../ItemListContainer';

const Home = () => {
  return (
    <main>
      <Hero title="JK Shoes" />
      <ItemListContainer />
    </main>
  );
};

export default Home;