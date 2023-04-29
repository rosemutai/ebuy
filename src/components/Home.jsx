import AdBanner from "./AdBanner"
import Categories from "./Categories"
import Footer from "./FOoter"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <AdBanner />
      <Categories />
      <Footer />

    </div>
  )
}

export default Home