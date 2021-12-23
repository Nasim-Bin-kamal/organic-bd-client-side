import { Box, Container, Fab, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './NewArrivals.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productSlice';


const NewArrivals = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector(state => state?.products)
    console.log(allProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <div>
            <Container>
                <Typography variant='h4' sx={{ mx: 'auto', py: 5, textAlign: 'center', fontWeight: 500 }}>
                    Top Seasonal products
                </Typography>

                <Grid container spacing={4}>
                    {
                        allProducts?.map((product, v_id) => <Grid key={v_id} item xs={12} md={6} lg={4}>
                            <Paper elevation={3}>
                                <Box className='content'>
                                    <Box className='content-overlay'></Box>
                                    <img className='content-image' src={product?.image} alt="" />
                                    <Box className='content-details fadeIn-bottom'>
                                        {/* <AddShoppingCartIcon sx={{ p: 1, backgroundColor: '#fff', borderRadius: '50%', fontSize: '40px', cursor: 'pointer' }} /> */}
                                        <Fab title="add to cart">
                                            <AddShoppingCartIcon sx={{ fontSize: '34px' }} />
                                        </Fab>
                                    </Box>
                                </Box>
                                <Typography variant='h5' sx={{ mt: 1, textAlign: 'center' }}>
                                    {product?.name}
                                </Typography>
                                <Typography variant='subtitle1' sx={{ pb: 2, textAlign: 'center' }}>
                                    Per Kg: <span className='productPrice'>{product?.price} Tk</span>
                                </Typography>
                            </Paper>
                        </Grid>)
                    }
                </Grid>

            </Container>
        </div>
    );
};

export default NewArrivals;

