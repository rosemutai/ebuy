import { useEffect, useState } from 'react';
import Products from './Products';

const Categories = () => {

  const [categories, setCategories] = useState([]);
   const [currentProducts, setCurrentProducts] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      console.log(data);
      setCategories(data);
    }

     const getAllProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
       setCurrentProducts(data);
    }

    getCategories();
    getAllProducts();

  }, [])
  return (
    <div className="categories-ad py-24 pl-32 pr-12 bg-white min-h-screen w-screen rounded-md flex">
      <div className="categories flex flex-col bg-brownish h-96 px-2 w-[16%]">
        {categories.map((category) => (
          <div key={category} className='h-full'>
            <a 
              href='#' 
              className='my-4 font-regular text-white   hover:text-gray-600 text-lg'
            >
              {category}
            </a>
            <hr />
          </div>
        ))}
      </div>
      <div className="ad w-full mr-7 ">
        <Products items={currentProducts} />
      </div>
    </div>
  )
}

export default Categories