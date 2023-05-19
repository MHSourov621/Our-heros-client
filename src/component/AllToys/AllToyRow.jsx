import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = ({ product }) => {
    const { _id, name, productName, price, category, quantity } = product;
    return (
        <>
            <tr>
                <td className='font-semibold'>{productName}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td className='font-semibold'>${price}</td>
                <td>{quantity} p</td>
                <td>
                    <Link to={`/details/${_id}`}>
                        <button className='btn bg-orange-400 hover:bg-orange-500'>View Details</button>
                    </Link>
                </td>
            </tr>
        </>


    );
};

export default AllToyRow;