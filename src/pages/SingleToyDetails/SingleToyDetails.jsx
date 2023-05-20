import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const SingleToyDetails = () => {

    const singleToy = useLoaderData();
    console.log(singleToy)

    const { _id, name, category, seller_name, seller_email, price, rating, available_quantity, description, picture_url } = singleToy;

    useTitle('Toy Details');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='container mx-auto py-10'>
            <div className="hero">

                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-md-1/2 w-full'>
                        <img src={picture_url} className="w-full" />
                    </div>

                    <div className='w-md-1/2 w-full'>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <div className='flex items-center my-5'>
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaStarHalf className='text-[#F4C610]'></FaStarHalf>}
                                placeholderSymbol={<FaStar className='text-[#F4C610]'></FaStar>}
                                fullSymbol={<FaStar className='text-[#F4C610]'></FaStar>}
                                readonly
                            />
                            <p className='font-bold'>{rating}</p>
                        </div>
                        <p className='text-2xl font-bold mb-5'>{price}</p>

                        <p>Category: <b>{category}</b></p>
                        <p>Available Quantity: {available_quantity}</p>
                        <p className='mt-5'><b>Product Description:</b> <br />{description}</p>
                        <div className='mt-5'>
                            <h4 className='text-xl font-bold'>Seller Details</h4>
                            <p>Name: {seller_name}</p>
                            <p>Email: {seller_email}</p>
                        </div>
                        <button className='mt-10 bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded font-bold text-lg'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;