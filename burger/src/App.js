
import './App.css';
import Navbar from './components/Navbar';
import { Routes ,Route} from "react-rooter-dom"
import Home from "./components/Home"



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/menu" exact element={<Menu/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
