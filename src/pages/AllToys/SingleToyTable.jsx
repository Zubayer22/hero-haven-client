import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const SingleToyTable = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, category, price, seller_name, available_quantity, description, picture_url } = product;
    return (
        <tr>
            <td>
                {seller_name}
            </td>
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
                <Link to={`/products/${_id}`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                </Link>
            </th>
        </tr>
    );
};

export default SingleToyTable;