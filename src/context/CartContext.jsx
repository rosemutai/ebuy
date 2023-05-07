/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext, useEffect, useReducer } from "react";
import { CartReducer as reducer} from "../reducers/CartReducer";

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart)
  }
  return []
}

const initialState = {
  cart: getLocalStorage(),
  totalPrice: 0,
  totalItems: 0,
  isCheckout: false
};

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({type: 'COUNT_CART_TOTALS'})
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  const addToCart = (product, amount) => {
    dispatch({type: 'ADD_TO_CART', payload: {product, amount}})
  }

  const toggleAmount = (id, value) => {
    dispatch({type: 'TOGGLE_CART_ITEM', payload: {id, value}})
  }

  const removeItem = (id) => {
    dispatch({type: 'REMOVE_CART_ITEM', payload: id})
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  }

  const checkout = () => {
    dispatch({ type: 'CHECKOUT' });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        toggleAmount,
        removeItem,
        clearCart,
        checkout
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}

