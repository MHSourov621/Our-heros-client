import React from 'react';
import { Link } from 'react-router-dom';

const MyToyRow = ({ hero }) => {
    const { _id, photo, productName, details, price, category, quantity } = hero;
    return (
        <tr>
            <th>
                <label>
                    <button>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                    </div>
                </div>
            </td>
            <td>{category}</td>
            <td className='w-40'>{details}</td>
            <td>$ {price}</td>
            <td>{quantity} p</td>
            <th>
                <Link to={`/update/${_id}`}>
                    <button className="btn bg-orange-400 hover:bg-orange-500">Update</button>
                </Link>
            </th>
        </tr>
    );
};

export default MyToyRow;