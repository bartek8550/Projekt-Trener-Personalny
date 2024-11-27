import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
