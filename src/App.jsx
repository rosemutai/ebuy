import Categories from './components/Categories';
import Footer from './components/FOoter';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className='w-full min-h-screen bg-greyish overflow-x-hidden'>
      <Navbar />
      <Categories />
      <Footer />
     
    </div>
  )
}

export default App
