import { Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/productSlice';

const Cart = () => {
    const cart = useSelector(state => state.products.cart);
    const dispatch = useDispatch();


    return (
        <div>
            <Header />
            <Container>
                <Typography variant='h4' sx={{ mx: 'auto', mt: 14, mb: 5, textAlign: 'center' }}>
                    My Cart: {cart?.length}
                </Typography>

                <Grid container spacing={2}>
                    {
                        cart?.map((product, _id) => (
                            <Grid key={product?._id} item xs={12} md={12} lg={9} sx={{ mx: 'auto', display: 'flex', justifyContent: 'center' }}>
                                <Paper sx={{
                                    mx: 'auto',
                                    p: 2,
                                    display: { sm: 'flex', md: 'flex', lg: 'flex' },
                                    justifyContent: 'space-between', alignItems: 'center',
                                    backgroundColor: '#E1F3DD'
                                }}>
                                    <Box sx={{
                                        width: { xs: '100%', sm: '15%', md: '10%', lg: '10%' }
                                    }}>
                                        <img src={product?.image} alt="" width='100%' />
                                    </Box>
                                    <Typography variant='h5' sx={{ py: 1 }}>
                                        {product?.name}
                                    </Typography>
                                    <Typography variant='h5' sx={{ py: 1 }}>
                                        {product?.price} Tk
                                    </Typography>
                                    <IconButton>
                                        <CancelIcon
                                            onClick={() => dispatch(removeFromCart(product?._id))}
                                            sx={{ fontSize: '40px' }} />
                                    </IconButton>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>

            </Container>
            <Footer />
        </div>
    );
};

export default Cart;