import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
  total: 0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const cartItem = state.cart.find((item) => item.id === action.payload)
      if(cartItem) {
        const tempCart = state.cart.map((item) => {
          if(item.id === cartItem.id){
            state.quantity += 1
          }
        })
      }
      state.cart.push(action.payload)
    }
  }
})


export const { addToCart } = CartSlice.actions
export default CartSlice.reducer