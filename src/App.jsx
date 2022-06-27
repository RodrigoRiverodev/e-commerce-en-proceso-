import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import './App.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/Cart/Cart";
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import CartProvider from './Context/CartContex';
import  { Toaster } from "react-hot-toast";



function App() {
  return(
    <> 
    <Toaster  position="top-center"/>
    <BrowserRouter>
      <CartProvider> 
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
    
    </>
  );
}

export default App;
