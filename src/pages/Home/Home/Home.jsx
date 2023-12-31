import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Gallerys from '../Gallery/Gallerys';
import IconSection from '../IconSection/IconSection';
import Reviews from '../Reviews/Reviews';
import Faq from '../Faq/Faq';
import useTitle from '../../../hooks/useTitle';


const Home = () => {
    useTitle('Best Toys');
    return (
        <div>
            <Banner/>
            <IconSection/>
            <Products/>
            <Gallerys/>
            <Reviews/>
            <Faq></Faq>
        </div>
    );
};

export default Home;