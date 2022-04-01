import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../Item/ItemDetailContainer';

const DetailPage = () => {
  let { id } = useParams();

  return (
    <main>
      <h1></h1>
      <ItemDetailContainer id={id} />
    </main>
  );
};

export default DetailPage;
