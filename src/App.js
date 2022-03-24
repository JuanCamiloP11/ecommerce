import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import Categorías from './components/Select/Categorias';



function App() {

  return (
    <div className="App">
      <NavBar />
      <Categorías/>
      <ItemListContainer />
      
    </div>
  );
}

export default App;
