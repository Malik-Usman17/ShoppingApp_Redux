import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find((item) => item.id === newItem.id);

      //console.log('Existing Item:',existingItem)

      if(existingItem){
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price
      }
      else{
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name
        })
        state.totalQuantity++;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload
      const existItem = state.itemList.find((item) => item.id == id)

      if(existItem.quantity == 1){
        state.itemList = state.itemList.filter((item) => item.id != id)
        state.totalQuantity--;
      }
      else{
        existItem.quantity--
        existItem.totalPrice -= existItem.price
      }
    },
    
    setShowCart(state) {
      state.showCart = true;
    }
  }
});


export const cartActions = cartSlice.actions;

export default cartSlice;