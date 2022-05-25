
import './App.css';
import Home from './Home';
import {Routes, Route} from "react-router-dom"
import About from './About';
import Contact from './Contact';
import Services from './Services';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap"
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/> 
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
