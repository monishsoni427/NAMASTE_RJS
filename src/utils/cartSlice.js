import { createSlice, current  } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanilla (older) Redux => DON't Mutate state , returning was mandatory

      //redux toolkit we have to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload.card.info.id
      );
    },

    //original State = ["pizza"]
    clearCart: (state) => {
        // RTK - > either Mutate the existing state or return the new state 
        // state.items.length = 0; // original State = []
        return {items: []};  // this also make orginal State = []
      },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
