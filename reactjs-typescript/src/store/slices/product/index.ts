import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { ProductState } from './types';
import axios from 'axios';

const initialState: ProductState = {
    productsDTO: [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk(
    'prodcts/fetchProducts',
    async (url: string) => {
      const {data} = await axios.get(url);
      return data.products;
    }
  );

export const slice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.productsDTO = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Erro ao carregar produtos';
          });
    }
});

export default slice.reducer;