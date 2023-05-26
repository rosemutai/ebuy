import { useEffect, useState } from 'react';
import Products from './Products';

const Categories = () => {

  const [currentProducts, setCurrentProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true)
     const getAllProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
       setCurrentProducts(data);
       setFilteredProducts(data);
       setLoading(false)
    }

    getAllProducts();

  }, [])

  const filterData = (category) => {
    const updatedData = currentProducts.filter((item) => item.category === category);
    setFilteredProducts(updatedData);
  }

   const ShowLoading = () => {
    return (
      <div className="loading">Loading...</div>
    )
  }

  const DisplayProducts = () => {
    return (
      <>
      <div className="categories flex flex-col bg-brownish/70 h-96 px-2 md:w-[16%]">
        <div className='h-full'>
          <button
            type='button' 
            className='my-4 font-regular text-white border-transparent hover:text-gray-600 text-lg'
            onClick={() => setFilteredProducts(currentProducts)}
          >
            All
          </button>
          <hr />
        </div>

        <div className='h-full'>
          <button
            type='button' 
            className='my-4 font-regular text-white border-transparent hover:text-gray-600 text-lg'
            onClick={() => filterData("women's clothing")}
          >
            Women&apos;s Clothing
          </button>
          <hr />
        </div>

        <div className='h-full'>
          <button
            type='button' 
            className='my-4 font-regular text-white border-transparent hover:text-gray-600 text-lg'
            onClick={() => filterData("men's clothing")}
          >
            Men&apos;s Clothing
          </button>
          <hr />
        </div>

        <div className='h-full'>
          <button
            type='button' 
            className='my-4 font-regular text-white border-transparent hover:text-gray-600 text-lg'
            onClick={() => filterData('jewelery')}
          >
            Jewelery
          </button>
          <hr />
        </div>

        <div className='h-full'>
          <button
            type='button' 
            className='my-4 font-regular text-white border-transparent hover:text-gray-600 text-lg'
            onClick={() => filterData('electronics')}
          >
            Electronics
          </button>
          <hr />
        </div>
      </div>
      <Products items={filteredProducts}/>
      </>
    )
  }
  return (
    <div className="categories-ad py-24 pl-4 md:pl-32 pr-12 bg-white min-h-screen w-screen rounded-md flex">
        {loading ? <ShowLoading /> : <DisplayProducts /> }
    </div>
  )
}

export default Categories