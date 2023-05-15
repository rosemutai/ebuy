import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTimes,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  clearCart,
  removeASingleItem,
  calculatateCartTotalAmount,
  increment,
  decrement
} from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, cartTotal } = useSelector((state) => state.cart);

  // Clear the whole shopping cart
  const clearShoppingCart = () => {
    dispatch(clearCart());
  };

  // Remove a single item from cart
  const removeItem = (id) => {
    dispatch(removeASingleItem(id));
  };

  // calculate the total amount in shopping cart
  useEffect(() => {
    dispatch(calculatateCartTotalAmount());
  }, [cart, dispatch]);

  // increment an item by one
  const incrementItem = (id) => {
    dispatch(increment(id));
  };

  // decrement an item by one
  const decrementItem = (id) => {
    dispatch(decrement(id));
  };

  

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
                  <button
                    onClick={() => incrementItem(item.product.id)}
                    className="bg-brownish/70 text-white px-1 rounded-sm"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <span className="px-2 font-bold">{item.quantity}</span>
                  <button
                    onClick={() => decrementItem(item.product.id)}
                    className="bg-brownish/70 text-white px-1 rounded-sm"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>

                <h5 className="item-price">KSh.{item.product.price}</h5>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => removeItem(cart)}
                  className="cursor-pointer"
                />
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
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>

      <div className="right-section w-1/4 mt-12 px-4 border border-brownish rounded-md ml-2">
        <div className="top p-4">
          <h2 className="text-2xl font-semibold">Order Summary</h2>
        </div>
        <hr className="border-x-0 border-t-0 border-b border-b-slate-200 mx-2" />
        <div className="top flex justify-between py-3">
          <h5>items 3</h5>
          <p className="total">5464</p>
        </div>

        <form className="flex flex-col">
          <div className="shipping flex flex-col mb-6">
            <label
              htmlFor="shipping"
              className="text-sm font-bold tracking-wider text-brownish"
            >
              SHIPPING
            </label>
            <input type="text" id="shipping" className="bg-slate-100" />
          </div>

          <div className="promocode flex flex-col mb-6">
            <label
              htmlFor="promo"
              className="text-sm font-bold tracking-wider text-brownish"
            >
              PROMO CODE
            </label>
            <input type="text" id="promo" className="bg-slate-100 p-2" />
          </div>
          <button className="bg-brownish w-1/2 text-white py-1 px-4 rounded-md text-center">
            APPLY
          </button>
        </form>
        <hr className="border-x-0 border-t-0 border-b border-b-slate-200 mx-2 mt-8" />
        <div className="top flex justify-between py-3">
          <h5 className="totalcost font-bold tracking-wider text-sm">
            TOTAL COST
          </h5>
          <p className="total">KSh. {cartTotal}</p>
        </div>
        <button className="bg-black/90 text-sm text-white py-2 tracking-wider mt-4 px-4 w-full text-center">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
