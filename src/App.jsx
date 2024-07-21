import { useState } from "react";
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import ProductDetailsPage from "../Components/ProductDetailsPage";
import ProductPage from "../Components/ProductPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { items } from "../Components/Data";
import Searchbar from "../Components/Searchbar";
import Cart from "../Components/Cart";

function App() {

const[data,setData]=useState([...items])
const[cart,setCart]=useState([])
  return (
    <Router>
      <Navbar cart={cart} setCart={setCart} setData={setData} />
      <Routes>
         <Route path="/" element={<ProductPage items={data} cart={cart} setCart={setCart}/>} />
         <Route path="/productdetails/:id" element={<ProductDetailsPage cart={cart} setCart={setCart}/>}/>
         <Route path="/search/:term" element={<Searchbar/>}/>
         <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
