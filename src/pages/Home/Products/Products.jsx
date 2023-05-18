import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='container mx-auto'>
            <h1 className="text-4xl font-bold text-center">Our Products</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products.map(product => <SingleProduct product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;