import React from 'react';
import { FaHeadphones, FaMoneyCheck, FaShippingFast, FaStar } from 'react-icons/fa';

const IconSection = () => {
    return (
        <div className='bg-slate-200 py-10'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    <div className='flex flex-col justify-center items-center mt-3'>
                        <FaShippingFast className='text-5xl'></FaShippingFast>
                        <h3 className='font-bold text-xl mt-4'>Free Delivery</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-3'>
                        <FaStar className='text-5xl'></FaStar>
                        <h3 className='font-bold text-xl mt-4'>Quality Toys</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-3'>
                        <FaMoneyCheck className='text-5xl'></FaMoneyCheck>
                        <h3 className='font-bold text-xl mt-4'>Secured Payment</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-3'>
                        <FaHeadphones className='text-5xl'></FaHeadphones>
                        <h3 className='font-bold text-xl mt-4'>Contact Support</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconSection;