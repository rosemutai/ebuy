import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
// import Cart from './components/Cart';
import Cart from "./routes/Cart";

function App() {

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        {/* <Route path="/carts/:id" element={<Cart />}></Route> */}
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App
