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
        isLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed

        builder.addCase(getProducts.pending, (state) => {
            // Add user to the state array
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            // Add user to the state array
            state.allProducts = action.payload;
            state.isLoading = true;
        })
        builder.addCase(getProducts.rejected, (state) => {
            // Add user to the state array
            state.isLoading = false;
        })

        // [getProducts.pending]: (state) => {
        //     state.isLoading = true;
        // },
        //     [getProducts.fulfilled]: (state, action) => {
        //         state.allProducts = action.payload;
        //         state.isLoading = false;
        //     },
        //         [getProducts.rejected]: (state) => {
        //             state.isLoading = false;
        //         }

    },

})



export default productSlice.reducer;