import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const SingleProduct = ({ product }) => {
    const { name, category, price, rating, available_quantity, description, picture_url } = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={picture_url} className='h-60' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">
                    {name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className='flex items-center'>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaStarHalf className='text-[#F4C610]'></FaStarHalf>}
                        placeholderSymbol={<FaStar className='text-[#F4C610]'></FaStar>}
                        fullSymbol={<FaStar className='text-[#F4C610]'></FaStar>}
                        readonly
                    />
                    <p className='font-bold'>{rating}</p>
                </div>

                <div className="card-actions justify-between items-center">
                    <p className='text-xl font-bold'>{price}</p>
                    <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded-full font-bold text-sm">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;