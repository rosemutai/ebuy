import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

function App() {

  return (
    <div className='w-full min-h-screen bg-white overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App
