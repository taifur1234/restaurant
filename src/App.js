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
import Check from './component/Checkout';

function App() {


  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
  const cleanPrice = parseFloat(item.price);

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
       <Main cart={cart}/>
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
       <Main cart={cart}/>
       <Contact/>
       <Open/>
       <Footer/>
        </>
      }/>

       <Route 
      path='/about'
      element={
        <>
       <Main cart={cart}/>
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
       <Main cart={cart}/>
       <Menu addToCart={addToCart}/>
       <ChefSpecial/>
       <Footer/>
        </>
      }/>

       <Route 
      path='/book'
      element={
        <>
       <Main cart={cart}/>
       <RestaurantBookTable/>
       <Footer/>
        </>
      }/>

       <Route 
      path='/cart'
      element={
        <>
       <Main cart={cart}/>
       <CartPage cart={cart} setCart={setCart}/>
       <Footer/>
        </>
      }/>

       <Route 
      path='/checkout'
      element={
        <>
       <Main cart={cart}/>
       <Check cart={cart}/>
       <Footer/>
        </>
      }/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;