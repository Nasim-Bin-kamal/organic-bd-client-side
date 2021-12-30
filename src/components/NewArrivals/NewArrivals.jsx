import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import './NewArrivals.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productSlice';
import SingleProduct from '../SingleProduct/SingleProduct';


const NewArrivals = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector(state => state?.products)
    console.log(allProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <div>
            <Container sx={{ mb: 10 }}>
                <Typography variant='h4' sx={{ mx: 'auto', py: 5, textAlign: 'center', fontWeight: 500 }}>
                    Top Seasonal products
                </Typography>

                <Grid container spacing={4}>
                    {
                        allProducts?.slice(0, 9).map((product) => (<SingleProduct key={product?._id} product={product} />))
                    }
                </Grid>

            </Container>
        </div>
    );
};

export default NewArrivals;

