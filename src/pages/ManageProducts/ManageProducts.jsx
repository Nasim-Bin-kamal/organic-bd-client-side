import { Button, Container, Grid, TableContainer, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../../redux/slices/productSlice';
import { toast } from 'react-toastify';
import axios from 'axios';



const ManageProducts = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector(state => state?.products)
    // console.log(allProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])





    return (
        <div>
            <Container>
                <Typography variant='h4' sx={{ mx: 'auto', my: 5, textAlign: 'center' }}>
                    Manage All Products
                </Typography>
                {/* <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, widht: '100%' }} aria-label="products Table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">Product Name</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Update/Delete</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allProducts.map((product) => (
                                    <TableRow
                                        key={product?._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center'>
                                            {product?._id}
                                        </TableCell>
                                        <TableCell align="center">{product?.name}</TableCell>
                                        <TableCell align="center">{product?.price}Tk</TableCell>
                                        <TableCell align="center">
                                            <Button onClick={() => dispatch(deleteProduct(product?._id))} variant='outlined'>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box> */}



            </Container>
        </div>
    );
};

export default ManageProducts;