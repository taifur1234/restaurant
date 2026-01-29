import './App.css';
import Main from './component/Main-page'
import Steps from './component/Steps'
import PopularFood from './component/Popularfood';
import WhyChooseFood from './component/WhyChooseFood';
import Customer from './component/Customer';
import Cta from './component/Cta';
import Footer from './component/Footer';

function App() {
  return (
    <div>
       <Main/>
       <Steps/>
       <PopularFood/>
       <WhyChooseFood/>
       <Cta/>
       <Customer/>
       <Footer/>
    </div>
  );
}

export default App;
