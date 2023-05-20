import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div className='container mx-auto my-10'>
            <h1 className="text-4xl font-bold text-center">Blogs</h1>

            <h3 className='text-xl font-bold mt-10'>Q. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p>An access token is a credential issued by an authentication server after a successful user authentication. It grants the client authorization to access protected resources or perform specific actions. Access tokens are short-lived and included in each client request to the server for identity verification and authorization. In contrast, a refresh token is a longer-lived credential also issued during authentication. It is used to obtain new access tokens without requiring the user to reauthenticate. Refresh tokens are securely stored on the client-side, usually in an HTTP-only cookie or a secure storage mechanism, to prevent unauthorized access. They are sent to the server when an access token expires to request a new one, improving the user experience by eliminating the need for frequent reauthentication.</p>

            <h3 className='text-xl font-bold mt-10'>Q. Compare SQL and NoSQL databases?</h3>
            <p>SQL databases are structured, follow a fixed schema, and use SQL as a query language. They ensure data integrity through normalization and adhere to ACID properties. NoSQL databases are unstructured or semi-structured, allowing for flexible data models and scalability. They prioritize availability and partition tolerance over strict consistency, making them suitable for handling large amounts of data and supporting high read/write loads. SQL databases are commonly used in traditional enterprise applications, while NoSQL databases excel in scenarios requiring scalability and flexible data models, such as web applications and big data solutions.</p>

            <h3 className='text-xl font-bold mt-10'>Q. What is express js? What is Nest JS?</h3>
            <p>Express.js is a lightweight and flexible framework for building web servers, while Nest.js is a more opinionated and feature-rich framework built on top of Express.js, offering additional features and structure to facilitate the development of server-side applications.</p>

            <h3 className='text-xl font-bold mt-10'>Q. What is MongoDB aggregate and how does it work?</h3>
            <p>The MongoDB aggregate function is a powerful feature that allows for advanced data aggregation operations in MongoDB. It works by using a pipeline of stages, where each stage performs a specific operation on the data. The stages can include filtering, grouping, sorting, transforming, and combining data from one or multiple collections. This enables efficient and flexible data analysis and reporting capabilities in MongoDB.</p>
        </div>
    );
};

export default Blogs;