import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './NewArrivals.css';

const NewArrivals = () => {
    return (
        <div>
            <Container>
                <Typography variant='h4' sx={{ mx: 'auto', py: 5, textAlign: 'center', fontWeight: 500 }}>
                    New Arrival Seasonal Vegetables
                </Typography>

                <Grid Container spacing={4}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper elevation={3}>
                            <Box className='content'>
                                <Box className='content-overlay'></Box>
                                <img className='content-image' src="https://i.ibb.co/2tXwmXh/asset-56.jpg" alt="" />
                                <Box className='content-details fadeIn-bottom'>
                                    <AddShoppingCartIcon sx={{ p: 1, backgroundColor: '#fff', borderRadius: '50%', fontSize: '40px' }} />
                                </Box>
                            </Box>
                            <Typography variant='h6' sx={{ mt: 1, textAlign: 'center' }}>
                                Product name
                            </Typography>
                            <Typography variant='body1' sx={{ pb: 2, textAlign: 'center' }}>
                                price:20taka
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
};

export default NewArrivals;

{/* <div class="content"> <a href="#">
    <div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/7cNRozs.jpg">
        <div class="content-details fadeIn-bottom">
            <h3 class="content-title">Geysers Valley Hotel</h3>
            <p class="content-text"><i class="fa fa-map-marker"></i> Russia</p>
        </div>
</a> </div> */}