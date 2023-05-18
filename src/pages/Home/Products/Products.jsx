import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [avengersProducts, setAvengersProducts] = useState([]);
    const [marvelProducts, setMarvelProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                filterProductsByCategory(data);
            });
    }, []);

    const filterProductsByCategory = (data) => {
        const avengers = data.filter(product => product.category === 'Avengers');
        const marvel = data.filter(product => product.category === 'Marvel');
        setAvengersProducts(avengers);
        setMarvelProducts(marvel);
    };


    const shuffleProducts = (array) => {
        // Fisher-Yates shuffle algorithm
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const randomProducts = shuffleProducts(products);

    return (
        <div className='container mx-auto my-10'>
            <h1 className="text-4xl font-bold text-center mb-10">Shop By Category</h1>

            <Tabs>
                <TabList>
                    <Tab>All Toys</Tab>
                    <Tab>Avengers Toys</Tab>
                    <Tab>Marvel Toys</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-3 gap-10'>
                        {
                            randomProducts.map(product => <SingleProduct key={product.id} product={product} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-10'>
                        {
                            avengersProducts.map(product => <SingleProduct key={product.id} product={product} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-10'>
                        {
                            marvelProducts.map(product => <SingleProduct key={product.id} product={product} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Products;
