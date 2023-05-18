import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Gallerys from '../Gallery/Gallerys';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallerys/>
            <Products/>
        </div>
    );
};

export default Home;