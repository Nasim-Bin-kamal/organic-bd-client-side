import { Card, CardContent, Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';



const users = [
    {
        id: '1',
        name: 'Winson Herry',
        address: 'California',
        image: "https://i.ibb.co/VVHWhNp/testimonial-one-img-3.png",
        desc: 'Very good quality product and they are so reliable.',
        rating: 5
    },
    {
        id: '2',
        name: 'PreetyTrininty',
        address: 'Virginia',
        image: "https://i.ibb.co/4sVGRWG/testimonial-one-img-1.png",
        desc: 'Very good quality product and they are so reliable.',
        rating: 4
    },
    {
        id: '3',
        name: 'Henry Keyts',
        address: 'California',
        image: "https://i.ibb.co/DVF89W5/testimonial-one-img-2.png",
        desc: 'Very good quality product and they are so reliable.',
        rating: 5
    }
]

const Testimonial = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ my: 10 }}>
                <Typography variant="h6" sx={{ mx: 'auto', textAlign: 'center' }}>
                    Testimonial
                </Typography>
                <Typography variant="h4" sx={{ mx: 'auto', textAlign: 'center', textTransform: 'capitalize', fontWeight: 500 }}>
                    Whats our Customer Says
                </Typography>

                <Grid container spacing={4} sx={{ my: 3 }}>
                    {
                        users.map(user => <Grid key={user.id} item xs={12} md={4}>

                            <Card>
                                <CardContent>

                                    <Grid container sx={{ my: 3, display: 'flex', direction: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Grid item>

                                            <img src={user.image} alt="" width="50%" />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" sx={{ color: '#0BBAB8' }}>
                                                {user.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {user.address}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Box>
                                        <Rating name="read-only" value={user?.rating} readOnly sx={{ py: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                                        <Typography>
                                            {user.desc}
                                        </Typography>
                                    </Box>

                                </CardContent>
                            </Card>


                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;