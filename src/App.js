import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './component/Main-page';
import Steps from './component/Steps';
import PopularFood from './component/Popularfood';
import WhyChooseFood from './component/WhyChooseFood';
import Customer from './component/Customer';
import Cta from './component/Cta';
import Footer from './component/Footer';
import Mid from './component/Mid';
import Contact from './component/Contact';


function App() {
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
       <Footer/>
        </>
      }/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
