import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from './components/Cart';

export const data = createContext()

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleRemove = (id) =>{
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr)
};

  return (
    <React.Fragment>
    <data.Provider value={{handleClick,cart, handleRemove}} >
      <Navbar setShow={setShow} cart={cart}/>
      {show ? <Home handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart}/>}
      </data.Provider>
    </React.Fragment>
  );
}

export default App;
