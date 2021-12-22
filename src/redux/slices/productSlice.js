import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const response = await fetch('http://localhost:5000/products')
            .then(res => res.json())
        return response;

    }

)


const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getProducts.fulfilled, (state, action) => {
            // Add user to the state array
            state.allProducts = action.payload;
            state.status = "success";
        })
        builder.addCase(getProducts.pending, (state, action) => {
            // Add user to the state array
            state.status = "pending";
        })


    },

})


export default productSlice.reducer;