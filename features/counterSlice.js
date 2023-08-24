import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
  }
  
    export const counterSlice = createSlice({
        name: 'counter',
        initialState,
        reducers: {
            addToCart: (state, action) => {
                // Redux Toolkit allows us to write "mutating" logic in reducers. It
                // doesn't actually mutate the state because it uses the Immer library,
                // which detects changes to a "draft state" and produces a brand new
                // immutable state based off those changes
                state.items = [...state.items, action.payload]
            },
            removeFromCart: (state, action) => {
                const index = state.items.findIndex((item) => item.id === action.payload.id)
                let newCart = [...state.items]
                if(index >= 0){
                    newCart.splice(index, 1)
                }else{
                    console.warn(`Cant remove product (id: ${action.payload.id}) as its not in cart!`)
                }

                state.items = newCart
            },
            incrementByAmount: (state, action) => {
                state.value += action.payload
            },
        },
    })
  
  // Action creators are generated for each case reducer function
  export const { addToCart, removeFromCart } = counterSlice.actions

  export const selectItems = (state) => state.counter.items

  export const selectCartTotal = (state) => state.counter.items.reduce((total, item) => total += item.price, 0)
  
  export default counterSlice.reducer