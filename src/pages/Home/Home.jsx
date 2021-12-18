import React from 'react';
import Header from '../../components/Header/Header';
import ProductTypes from '../../components/ProductTypes/ProductTypes';
import TopBanner from '../../components/TopBanner/TopBanner';
import TopProducts from '../../components/TopProducts/TopProducts';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <ProductTypes />
            <TopProducts />
        </div>
    );
};

export default Home;