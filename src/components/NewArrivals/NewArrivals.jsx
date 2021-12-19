import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './NewArrivals.css';

const newVegetables = [
    {
        name: "Cabbage",
        image: "https://i.ibb.co/2tXwmXh/asset-56.jpg",
        price: "50"
    },
    {
        name: "Tomato",
        image: "https://i.ibb.co/RCrJQsq/asset-48.jpg",
        price: "80"
    },
    {
        name: "Lady's Finger",
        image: "https://i.ibb.co/ZfrF48C/asset-54.jpg",
        price: "45"
    },
    {
        name: "Eggplant",
        image: "https://i.ibb.co/pytCttZ/asset-40.jpg",
        price: "30"
    },
    {
        name: "Sweet pumpkin",
        image: "https://i.ibb.co/1MsfdCz/asset-38.jpg",
        price: "70"
    },
    {
        name: "Carrots",
        image: "https://i.ibb.co/zmxzCtG/asset-42.jpg",
        price: "80"
    },
    {
        name: "Corn",
        image: "https://i.ibb.co/zmxzCtG/asset-42.jpg",
        price: "60"
    },
    {
        name: "Coriander leaves",
        image: "https://i.ibb.co/R9m90Zz/asset-12.jpg",
        price: "30"
    },
    {
        name: "Bell Pepper",
        image: "https://i.ibb.co/4TJFT9J/asset-44.jpg",
        price: "150"
    }
];

const NewArrivals = () => {
    return (
        <div>
            <Container>
                <Typography variant='h4' sx={{ mx: 'auto', py: 5, textAlign: 'center', fontWeight: 500 }}>
                    Top Seasonal Vegetables
                </Typography>

                <Grid container spacing={4}>
                    {
                        newVegetables?.map((vegetable, v_id) => <Grid key={v_id} item xs={12} md={6} lg={4}>
                            <Paper elevation={3}>
                                <Box className='content'>
                                    <Box className='content-overlay'></Box>
                                    <img className='content-image' src={vegetable?.image} alt="" />
                                    <Box className='content-details fadeIn-bottom'>
                                        <AddShoppingCartIcon sx={{ p: 1, backgroundColor: '#fff', borderRadius: '50%', fontSize: '40px', cursor: 'pointer' }} />
                                    </Box>
                                </Box>
                                <Typography variant='h5' sx={{ mt: 1, textAlign: 'center' }}>
                                    {vegetable?.name}
                                </Typography>
                                <Typography variant='subtitle1' sx={{ pb: 2, textAlign: 'center' }}>
                                    Per Kg: <span className='vegetablePrice'>{vegetable?.price} Tk</span>
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

