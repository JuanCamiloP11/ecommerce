import '../components/NavBar.css'
import React from "react";
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';



function NavBar () {
    return(
        <header className="main-header">
            <div className="container-logo">
                <img
                    src="logoEcommerce.png"
                    className="img-header"
                />
            </div>
            <nav>
          <ul className="nav-container">
            <li>
              <Link to={'/'}>Inicio</Link>
            </li>
            <li className="products-item">
            <Link to={'/productos'}>Productos</Link>
            </li>
            <li>
            <Link to={'/nosotros'}>Nosotros</Link>
            </li>
            <li>
            <Link to={'/contacto'}>Contacto</Link>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header> 
    )
}

export default NavBar