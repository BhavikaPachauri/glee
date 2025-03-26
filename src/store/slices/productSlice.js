import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("get/product", async () => {
  const formData = new FormData();
  formData.append("action", "get");
  const response = await axios.post(
    "https://api.plusdistribution.in/pdpl/glee-products",
    formData
  );
  const {
    response: { list },
  } = response.data;
  return list;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: true,
    selectedProduct: null,
    error: null,
    selectedCategory: "All",
    categoryWiseProducts: [],
  },
  reducers: {
    setProduct(state, action) {
      state.products = action.payload;
      state.categoryWiseProducts = action.payload;
      state.loading = false;
    },
    setSingleProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    setCategory(state, action) {
      state.selectedCategory = action.payload;
      if (state.selectedCategory === "All") {
        state.categoryWiseProducts = state.products;
      } else {
        state.categoryWiseProducts = state.products.filter(
          (prd) => prd.prod_category === state.selectedCategory
        );
      }
    },
    setCategoryProducts(state, action) {
      if (state.selectedCategory === "All") {
      } else {
        state.categoryWiseProducts = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.categoryWiseProducts = action.payload;
        state.loading = false;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setProduct,
  setSingleProduct,
  setCategory,
} = productSlice.actions;

export default productSlice.reducer;
