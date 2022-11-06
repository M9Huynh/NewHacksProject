import './App.css';
import Card from './components/Card'
import Home from './components/Home'
import Locate from './components/Locate'
import Advertise from './components/Advertise'
import FeaturedCard from './components/featured/FeaturedCard';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/map' element={<Locate />}/>
      <Route path='/for-rent' element={<FeaturedCard />}/>
      <Route path='/sell' element={<Advertise />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;