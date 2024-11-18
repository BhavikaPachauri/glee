import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async ({ email, password }) => {
  const response = await axios.post("/api/login", { email, password });
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    selectedProduct: null,
    error: null,
  },
  reducers: {
    setProduct(state, action) {
      state.products = action.payload;
    },
    setSingleProduct(state, action) {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setProduct, setSingleProduct } = productSlice.actions;

export default productSlice.reducer;
