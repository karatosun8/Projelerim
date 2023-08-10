
import './App.css';
import { Route,Routes} from "react-router-dom"
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/menu' exact element={<Menu/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/about' exact element={<About/>}/>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
