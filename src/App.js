import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from './components/Cart';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} cart={cart}/>
      {show ? <Home handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart}  />}
    </React.Fragment>
  );
}

export default App;
