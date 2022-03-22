import React, { Component } from 'react';
import { BsFillCartFill } from "react-icons/bs";

class CartWidget extends Component {
  render() {
    return (
      <div>
        <BsFillCartFill style={{color: 'red', fontSize: '50px'}} />
        {/* <p></p> */}
      </div>
      
    ) 
        
  }
}

export default CartWidget;