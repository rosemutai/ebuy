/* eslint-disable react/prop-types */

const Products = ({ items }) => {

  return (
    <div className='ml-8 grid grid-cols-5 gap-x-2 gap-y-4 bg-brownish p-3 w-full'>
        { items.map((item) => (
          <div key={item.id} className="product-card bg-white p-2 w-[12rem] border border00
            rounded-sm hover:shadow hover:shadow-gray-500">
            <img src={item.image}  className='w-24 h-24 object-contain'/>
            <h5 className='product-name text-sm text-gray-600 my-2'>{item.title}</h5>
            <h4 className=" my-2 text-brownish font-semibold py-1 rounded-lg text-sm
              border-transparent">KSh. {item.price}
            </h4>
          </div>
          
        )) }

    </div>
  )
}

export default Products