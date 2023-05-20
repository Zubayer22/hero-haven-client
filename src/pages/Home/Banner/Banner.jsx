import React from 'react';
import banner from '../../../assets/banner.webp';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Banner = () => {
    AOS.init();
    return (
        <div className="container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-md-1/2 w-full' data-aos="fade-left" data-aos-duration="1000">
                    <img src={banner} className="w-full" />
                </div>

                <div className='w-md-1/2 w-full' data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="text-4xl font-bold">Discover Your Inner Hero at Hero Haven</h1>
                    <p className="py-6">At Hero Haven, we bring together the thrilling world of action figures and collectibles to delight fans and collectors alike. Step into our virtual haven and immerse yourself in a universe filled with your favorite superheroes and iconic characters.</p>
                    <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded font-bold text-lg">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;