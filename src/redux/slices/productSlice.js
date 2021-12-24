import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const response = await fetch('https://safe-beach-17728.herokuapp.com/products')
            .then(res => res.json())
        return response;

    }

)


const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        cart: [],
        isLoading: false
    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.cart.push(payload);
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(product => product._id !== payload);
        }

    },
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

export const { addToCart, removeFromCart } = productSlice.actions

export default productSlice.reducer;