import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="navbar px-4 md:px-36 py-8 bg-white flex flex-col md:flex-row mb-12 fixed w-full shadow-sm shadow-brownish/40">
      <div className="logo-section flex justify-between w-full pb-5 md:pb-0 md:w-1/4">
        <Link to="/" className="logo text-3xl font-bold cursor-pointer">
          eBu<span className="text-brownish/70 text-4xl">y</span>
        </Link>
        <div className="other-links ml-4 py-2 gap-4 flex md:hidden">
          <div className="user flex mr-3">
            <span className="material-symbols-outlined">person_4</span>
            <p className="user-name">Hi, Rose</p>
          </div>

          <div className="cart flex relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <p
              className="absolute -top-5 text-center left-3 text-white
            bg-brownish p-3 w-5 h-4 rounded-[50%]"
            >
              <span className="absolute textcenter left-2 inset-1/4 text-xs ">
                {cart.length}
              </span>
            </p>
          </div>
        </div>
      </div>
      <hr className="border-x-0 border-t-0 border-b border-b-brownish/30 md:hidden"/>
      <div className="flex items-center w-full md:ml-auto my-8 md:my-0">
        <div className="search-form w-full md:w-7/12 md:ml-12">
          <form className="w-full flex">
            <span className="material-symbols-outlined absolute text-gray-300 ml-2 mt-2">
              search
            </span>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search products..."
              className="placeholder:pl-8 placeholder:text-gray-300
                border w-full border-gray-400 bg-white placeholder:text-sm 
                p-2 rounded-md focus:shadow focus:outline-0 focus:shadow-brownish focus:border-transparent"
            />
            <button className="py-2 px-6 ml-4 bg-brownish/70 font-semibold rounded-md text-white hover:bg-black/90">
              Search
            </button>
          </form>
        </div>

        <div className="other-links ml-4 py-2 gap-4 md:flex hidden">
          <div className="user flex mr-2">
            <span className="material-symbols-outlined">person_4</span>
            <p className="user-name">Hi, Rose</p>
          </div>

          <div className="help flex mr-3">
            <span className="material-symbols-outlined">help</span>
            <a href="#hghg" className="user-name pl-2">
              Help
            </a>
          </div>

          <div className="cart flex relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <p
              className="absolute -top-5 text-center left-3 text-white
            bg-brownish p-3 w-5 h-4 rounded-[50%]"
            >
              <span className="absolute textcenter left-2 inset-1/4 text-xs ">
                {cart.length}
              </span>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
