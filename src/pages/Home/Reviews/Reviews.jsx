import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";



// import required modules
import { Grid, Pagination } from "swiper";
import Star from "./Star";

const Reviews = () => {
    return (
        <div className=" bg-base-200">
            <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold text-center mb-10">Our Customer Reviews</h1>
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 1,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
                breakpoints={{
                    // Define responsive settings for different screen sizes
                    280: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
            >
                <SwiperSlide>
                    <div className="text-center">
                        <Star></Star>
                        <p className="py-4">"I absolutely love Hero Haven! The selection of action figures is incredible, and the quality is top-notch. I'm a big fan of Marvel and Avengers, and they have all the characters I could ever want. Highly recommended!"</p>
                        <h4 className="font-bold text-sm pb-10">- John D.</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <Star></Star>
                        <p className="py-4">"Hero Haven is my go-to place for collecting superhero action figures. The website is easy to navigate, and the checkout process is smooth. The customer service is also excellent. I had a question about a product, and they responded promptly and helped me out. Great experience overall!" </p>
                        <h4 className="font-bold text-sm pb-10"> - Emily S.</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <Star></Star>
                        <p className="py-4">"I recently purchased an Iron Man action figure from Hero Haven, and I couldn't be happier with my purchase. The product arrived in pristine condition, and the attention to detail is impressive. The prices are competitive, and the website provides accurate descriptions and images. If you're a superhero enthusiast like me, Hero Haven is a must-visit!"</p>
                        <h4 className="font-bold text-sm pb-10">- Sarah L.</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <Star></Star>
                        <p className="py-4">"Hero Haven has an amazing selection of superhero action figures. Being a collector, I appreciate the attention to detail in each product. The website is user-friendly, and the product descriptions are accurate. The prices are reasonable, and the shipping is always prompt. I highly recommend Hero Haven to all superhero fans!"</p>
                        <h4 className="font-bold text-sm pb-10"> - Amanda G.</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <Star></Star>
                        <p className="py-4">"I stumbled upon Hero Haven while searching for Black Panther merchandise, and I'm so glad I did. Not only did they have the action figure I was looking for, but their customer service was outstanding. They went above and beyond to ensure a smooth shopping experience. Hero Haven is my new favorite online store for all things superhero!" </p>
                        <h4 className="font-bold text-sm pb-10"> - Amanda G.</h4>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
        </div>
        
    );
};

export default Reviews;