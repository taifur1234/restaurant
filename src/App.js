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
import Open from './component/OpenHour';
import About from './component/About';
import WeDo from './component/WeDo';
import Chef from './component/Chef';
import Menu from './component/Menu';


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
       <Menu/>
       <Footer/>
        </>
      }/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
