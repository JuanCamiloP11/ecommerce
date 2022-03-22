import Button from '@mui/material/Button';
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
        <ul className='navbar'>
          <li><Button color="error" variant="contained">Inicio</Button></li>
          <li><Button color="error" variant="contained">Productos</Button></li>
          <li><Button color="error" variant="contained">Nosotros</Button></li>
          <li><Button color="error" variant="contained">Contacto</Button></li>
        </ul>
        <CartWidget />
      </header> 
    )
}

export default NavBar