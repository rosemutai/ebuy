import { useEffect, useState } from 'react';

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
    <div className="categories-ad my-8 mx-24  bg-white rounded-md h-72 w-[15%]">
      <div className="categories flex flex-col px-2">
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
    </div>
  )
}

export default Categories