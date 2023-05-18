import React from 'react';

const AllToyRow = ({product}) => {
    const {name, productName, price, category, quantity} = product;
    return (
            <tr>
                <td className='font-semibold'>{productName}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td className='font-semibold'>${price}</td>
                <td>{quantity} p</td>
                <td>
                    <button className='btn bg-orange-400 hover:bg-orange-500'>View Details</button>
                </td>
            </tr>
    );
};

export default AllToyRow;