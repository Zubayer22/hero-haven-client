import React, { useEffect, useState } from 'react';
import SingleProduct from '../Home/Products/SingleProduct';
import SingleToyTable from './SingleToyTable';

const AllToys = () => {


    const [products, setProducts] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleSearch = () => {
        fetch(`http://localhost:3000/products-search/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }

    return (
        <div className='container mx-auto py-10'>
            <h1 className="text-4xl font-bold text-center mb-10">All Toys</h1>
            <div className="overflow-x-auto w-full">

                <div className='flex justify-center'>
                    <div className="form-control mb-10">
                        <div className="input-group">
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                            <button onClick={handleSearch} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>


                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Toy Image</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
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