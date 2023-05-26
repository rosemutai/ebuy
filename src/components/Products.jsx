/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const Products = ({ items }) => {

  return (
    <div className='ml-2 grid grid-cols-2 md:grid-cols-4 mdflex mdflex-wrap gap-11 md:gap-2 p-3 w-full '>
        { items.map((item) => (
          <div key={item.id} className="product-card bg-white h-60 p-2 w-28 md:w-48 border border-gray-200 md:border-gray-300
            rounded-sm hover:shadow hover:shadow-gray-300">
              <Link to={`/products/${item.id}`}>
                <img src={item.image}  className='w-24 h-24 object-contain'/>
              </Link>
            <h5 className='product-name text-sm text-gray-600 my-2'>{item.title.substring(0, 16)}...</h5>
            <h4 className=" my-2 text-brownish/70 font-semibold py-1 rounded-lg text-sm
              border-transparent">KSh. {item.price}
            </h4>
          </div>
          
        )) }

    </div>
  )
}

export default Products