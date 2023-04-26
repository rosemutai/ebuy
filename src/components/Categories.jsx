import { useEffect, useState } from 'react';
import ImageCarousel from './ImageCarousel';

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      console.log(data);
      setCategories(data);
    }

    getCategories();

  }, [])
  return (
    <div className="categories-ad my-8 bg-white rounded-md h-72 gap-2 grid grid-cols-2">
      <div className="categories flex flex-col px-2 col-start-2 col-end-6 bg-blue-600">
        {categories.map((category) => (
          <>
            <a 
              href='#' 
              key={category}
              className='my-4 font-regular text-gray-600 text-lg hover:text-brownish'
            >
              {category}
            </a>
            <hr />
          </>
        ))}
      </div>
      <div className="ad col-start-6 col-end-11 bg-red-600">
        <ImageCarousel />
      </div>
    </div>
  )
}

export default Categories