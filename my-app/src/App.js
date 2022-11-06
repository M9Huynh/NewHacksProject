import './App.css';
import Card from './components/Card'
import Home from './components/Home'
import FeaturedCard from './components/featured/FeaturedCard';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/for-rent' element={<FeaturedCard />}/>
    </Routes>
   </BrowserRouter>
   
  );
}

export default App;