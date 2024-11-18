import Navbar from './components/Navbar';
import Slider from './components/Slider';
import './css/style.css';
import './css/media.css';
import {BrowserRouter,Router,Routes,Route} from 'react-router-dom';
import Information from './components/Information';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={
        <>
        <Slider/>
        <Information/>
        <Project/>
        <About/>
        <Contact/>
        </>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
