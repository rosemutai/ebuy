import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTimes, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { clearCart } from "../features/cart/cartSlice";

const Cart = () => {

  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart);

  const clearShoppingCart = () => {
    dispatch(clearCart())
  }
  
  return (
    <div className="shopping-cart px-24 flex my-32">
      <div className="left-section w-3/4 border border-brownish rounded-md mt-12">
        <div className="top flex justify-between p-4">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <p className="quantity text-lg font-semibold">3 items</p>
        </div>
        <hr className="border-x-0 border-t-0 border-b border-b-slate-200 mx-4" />
        {cart &&
          cart.map((item) => {
            return (
              <div
                key={item.product.id}
                className="w-[98%] mb-4 mx-auto item bge-500 p-4 flex items-center justify-between
                  border-x-0 border-t-0 border-b-2 border-b-slate-100"
              >
                <img
                  src={item.product.image}
                  alt="jacket"
                  className="w-20 h-20 object-contain"
                />
                <div className="details ">
                  <p className="j">{item.product.title}</p>
                  <p className="text-brownish">{item.product.category}</p>
                </div>

                <div className="increase-decrease flex">
                  <button className="bg-brownish/70 text-white px-1 rounded-sm">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="px-2 font-bold">{item.quantity}</span>
                  <button className="bg-brownish/70 text-white px-1 rounded-sm">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>

                <h5 className="item-price">KSh.{item.product.price}</h5>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            );
          })}
        <div className="clear my-4">
          <button
            onClick={clearShoppingCart}
            className="bg-red-400 text-white py-1 px-4 ml-4 rounded-md text-center"
          >
            Clear
          </button>
        </div>

        <div className="continue-shopping my-6 ml-4 text-brownish">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
            Continue Shopping
          </Link>
        </div>
      </div>

      <div className="right-section w-1/4"></div>
    </div>
  );
};

export default Cart;
