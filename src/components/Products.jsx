/* eslint-disable react/prop-types */

const Products = ({ items }) => {

  return (
    <div className='ml-2 flex flex-wrap gap-x-2 gap-y-4 p-3 w-full justify-center'>
        { items.map((item) => (
          <div key={item.id} className="product-card bg-white h-60 p-2 w-[12rem] border border-gray-300
            rounded-sm hover:shadow hover:shadow-gray-300">
            <img src={item.image}  className='w-24 h-24 object-contain'/>
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