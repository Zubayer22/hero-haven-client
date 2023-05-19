import React, { useEffect, useState } from 'react';
import SingleProduct from '../Home/Products/SingleProduct';
import SingleToyTable from './SingleToyTable';

const AllToys = () => {


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://hero-haven-server-nu.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container mx-auto py-10'>
            <h1 className="text-4xl font-bold text-center mb-10">All Toys</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Toy Image</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map(product => <SingleToyTable product={product} key={product._id}></SingleToyTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;