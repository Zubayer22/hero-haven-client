import React, { useEffect, useState } from 'react';
import SingleProduct from '../Home/Products/SingleProduct';

const AllToys = () => {   
    
    
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='container mx-auto my-10'>
            <h1 className="text-4xl font-bold text-center mb-10">All Toys</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products.map(product => <SingleProduct product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllToys;