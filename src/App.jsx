import AdBanner from './components/AdBanner';
import Categories from './components/Categories';
import Footer from './components/FOoter';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className='w-full min-h-screen bg-white overflow-x-hidden'>
      <Navbar />
      <AdBanner />
      <Categories />
      <Footer />
     
    </div>
  )
}

export default App
