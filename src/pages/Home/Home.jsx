import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
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
            <NewArrivals />
            <Footer />
        </div>
    );
};

export default Home;