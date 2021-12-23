import { Box, Fab, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/productSlice';

const SingleProduct = ({ product }) => {
    const dispatch = useDispatch();


    const { image, name, price } = product || {};
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3}>
                <Box className='content'>
                    <Box className='content-overlay'></Box>
                    <img className='content-image' src={image} alt="" />
                    <Box className='content-details fadeIn-bottom'>
                        {/* <AddShoppingCartIcon sx={{ p: 1, backgroundColor: '#fff', borderRadius: '50%', fontSize: '40px', cursor: 'pointer' }} /> */}
                        <Fab title="add to cart">
                            <AddShoppingCartIcon
                                onClick={() => dispatch(addToCart(product))}
                                sx={{ fontSize: '34px' }} />
                        </Fab>
                    </Box>
                </Box>
                <Typography variant='h5' sx={{ mt: 1, textAlign: 'center' }}>
                    {name}
                </Typography>
                <Typography variant='subtitle1' sx={{ pb: 2, textAlign: 'center' }}>
                    Per Kg: <span className='productPrice'>{price} Tk</span>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default SingleProduct;