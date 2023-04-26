const Navbar = () => {
  return (
    <div className='navbar px-36 py-2 bg-white flex items-center'>
      <div className="logo-section">
        <a href="#" className="logo text-3xl font-bold">eBu<span className="text-brownish text-4xl">y</span></a>
      </div>
      <div className="search-form w-7/12 ml-12">
        <form className="w-full flex">
          <span className="material-symbols-outlined absolute text-gray-300 ml-2 mt-2">search</span>
          <input
            type="text" 
            name="search" 
            id="search" 
            placeholder="Search products, brands and categories" 
            className="placeholder:pl-8 placeholder:text-gray-300 placeholder:text-lg
              border w-full border-gray-500 bg-white
              p-2 rounded-md"
          />
          <button className="py-2 px-6 ml-4 bg-brownish font-semibold rounded-md text-white">Search</button>
        </form>
      </div>

      <div className="other-links flex ml-4 py-2 gap-4">
        <div className="user flex">
          <span className="material-symbols-outlined">person_4</span>
          <p className="user-name">Hi, Rose</p>
        </div>

        <div className="help flex">
          <span className="material-symbols-outlined">help</span>
          <p className="user-name">Help</p>
        </div>

        <div className="cart flex">
          <span className="material-symbols-outlined">shopping_cart</span>
          <p className="user-name">Cart</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar