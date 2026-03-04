import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from './component/Main-page';
import Steps from './component/Steps';
import PopularFood from './component/Popularfood';
import WhyChooseFood from './component/WhyChooseFood';
import Customer from './component/Customer';
import Cta from './component/Cta';
import Footer from './component/Footer';
import Mid from './component/Mid';
import Contact from './component/Contact';
import Open from './component/OpenHour';
import About from './component/About';
import WeDo from './component/WeDo';
import Chef from './component/Chef';
import Menu from './component/Menu';
import ChefSpecial from './component/ChefSpecial';
import RestaurantBookTable from './component/RestaurantBookTable';
import CartPage from './component/Cartpages';

function App() {

  // ✅ 1. Cart State (localStorage se load hoga)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ 2. Jab bhi cart change ho save ho jaaye
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
  const cleanPrice = parseFloat(item.price);  // safety

  setCart([...cart, { 
    ...item, 
    price: cleanPrice,
    qty: 1 
  }]);
};

  return (
    <BrowserRouter>
    <Routes>

      <Route 
      path='/'
      element={
        <>
       <Main/>
       <Mid/>
       <Steps/>
       <PopularFood/>
       <WhyChooseFood/>
       <Cta/>
       <Customer/>
       <Footer/>
        </>
      }/>

       <Route 
      path='/contact'
      element={
        <>
       <Main/>
       <Contact/>
       <Open/>
       <Footer/>
        </>
      }/>

       <Route 
      path='/about'
      element={
        <>
       <Main/>
       <About/>
       <WeDo/>
       <Chef/>
       <Footer/>
        </>
      }/>

       <Route 
      path='/menu'
      element={
        <>
       <Main/>
       {/* 👇 Yaha sirf addToCart pass kiya */}
       <Menu addToCart={addToCart}/>
       <ChefSpecial/>
       <Footer/>
        </>
      }/>

       <Route 
      path='/book'
      element={
        <>
       <Main/>
       <RestaurantBookTable/>
       <Footer/>
        </>
      }/>

       <Route 
      path='/cart'
      element={
        <>
       <Main/>
       <CartPage cart={cart} setCart={setCart}/>
       <Footer/>
        </>
      }/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;