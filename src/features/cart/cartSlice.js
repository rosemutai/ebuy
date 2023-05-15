import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  total: 0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action.payload)
      const existingCartItem = state.cart.findIndex((item) => item.product.id === action.payload.product.id)
      if(existingCartItem >= 0) {
        state.cart[existingCartItem].quantity += 1
      } else {
        let itemToAddToCart;

        if(action.payload.quantity > 1) {
          itemToAddToCart = { ...action.payload, quantity: action.payload.quantity}
          state.cart.push(itemToAddToCart)
        } else {
          itemToAddToCart = { ...action.payload, quantity: 1}
          state.cart.push(itemToAddToCart)
        }

        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },

    clearCart: (state) => {
      state.cart = []
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    removeASingleItem: (state, action) => {
      console.log(action)
      const updatedCart = state.cart.filter((item) => item.product.id !== action.payload)
      state.cart = updatedCart
      localStorage.setItem('cart', JSON.stringify(state.cart))

    }
  }
})


export const { addItemToCart, clearCart, removeASingleItem } = CartSlice.actions
export default CartSlice.reducer