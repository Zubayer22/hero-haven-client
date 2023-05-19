import React from 'react';
import { FaUserEdit } from 'react-icons/fa';

const SingleMyToy = ({ myToy, handleDelete }) => {
    
    const { _id, name, category, price, seller_name, available_quantity, description, picture_url } = myToy;

    

    return (
        <tr>
            <td>
                <h3 className='font-bold'>{name}</h3>
            </td>
            <td>
                <img src={picture_url} className='w-10' alt="" />
            </td>
            <td>
                {category}
            </td>
            <td>
                $ {price}
            </td>
            <td>
                {available_quantity}
            </td>
            <th>
                <button className="btn btn-circle">
                    <FaUserEdit className="h-6 w-6"></FaUserEdit>
                </button>
            </th>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle border-none bg-red-600 hover:bg-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default SingleMyToy;