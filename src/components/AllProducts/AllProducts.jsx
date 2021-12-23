import { Container, Fab, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
// import { products } from '../../Data/products';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productSlice';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector(state => state?.products)
    console.log(allProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])



    return (
        <div>
            <Container sx={{ mt: 10 }}>
                <Typography variant='h4' sx={{ pt: 3, textAlign: 'center' }}>
                    ALL PRODUCTS
                </Typography>

                <Grid container spacing={4} sx={{ my: 5 }}>
                    {
                        allProducts?.map((product) => (<SingleProduct key={product?._id} product={product} />))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AllProducts;