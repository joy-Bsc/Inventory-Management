import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    Total: 0, // Initialize Total as a number, assuming it represents the count
    ALLProduct: [] // Initialize ALLProduct as an empty array
  },
  reducers: {
    setTotal: (state, action) => {
      state.Total = action.payload; // Update Total with the payload
    },
    setALLProduct: (state, action) => {
      state.ALLProduct = action.payload; // Update ALLProduct with the payload
    }
  }
});

export const { setTotal, setALLProduct } = productSlice.actions;
export default productSlice.reducer;
