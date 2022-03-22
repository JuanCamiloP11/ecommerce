import './App.css';
import NavBar from './components/NavBar'
import ListProducts from './components/ListProduts/ListProducts';


function App() {

  return (
    <div className="App">
      <NavBar />
      <ListProducts>
        <p className='parrafo'>Nuestros Productos</p>
      </ListProducts>
      
    </div>
  );
}

export default App;
