import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import TopHeader from '../../../Shared/TopHeader/TopHeader';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TopCar from '../TopCar/TopCar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <TopHeader />
            <Navigation />
            <Banner />
            <TopCar />
            <Services />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;