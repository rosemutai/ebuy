import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="navbar px-36 py-8 bg-white flex items-center mb-12 fixed w-full shadow-sm shadow-brownish/40">
      <div className="logo-section">
        <Link to="/" className="logo text-3xl font-bold cursor-pointer">
          eBu<span className="text-brownish/70 text-4xl">y</span>
        </Link>
      </div>
      <div className="search-form w-7/12 ml-12">
        <form className="w-full flex">
          <span className="material-symbols-outlined absolute text-gray-300 ml-2 mt-2">
            search
          </span>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search products, brands and categories"
            className="placeholder:pl-8 placeholder:text-gray-300 placeholder:text-lg
              border w-full border-gray-400 bg-white
              p-2 rounded-md"
          />
          <button className="py-2 px-6 ml-4 bg-brownish/70 font-semibold rounded-md text-white">
            Search
          </button>
        </form>
      </div>

      <div className="other-links flex ml-4 py-2 gap-4">
        <div className="user flex mr-3">
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
           bg-brownish p-3 w-4 h-4 rounded-[50%]"
          >
            <span className="absolute textcenter left-2 inset-1/4 text-xs ">
              {cart.length}
            </span>
          </p>
          <p className="user-name ml-3">Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
