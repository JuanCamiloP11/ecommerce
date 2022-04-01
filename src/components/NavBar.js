import '../components/NavBar.css'
import React from "react";
import CartWidget from './CartWidget/CartWidget';



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
              <a href="/">Inicio</a>
            </li>
            <li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
            </li>
            <li>
              <a href="/">Nosotros</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header> 
    )
}

export default NavBar