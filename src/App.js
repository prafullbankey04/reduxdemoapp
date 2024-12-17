import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './component/Header';

function App() {
  return (
    <div >     
      <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </div>
  );
}

export default App;
