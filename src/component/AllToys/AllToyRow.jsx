import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AllToyRow = ({ product }) => {
    const { _id, name, productName, price, category, quantity } = product;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleDetails = (id) => {
        if (!user?.email) {
            Swal.fire({
                title: 'You have to log in first to view details',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            // <Navigate to={`/details/${id}`}></Navigate>
            navigate(`/details/${id}`)
        }
        else{
            navigate(`/details/${id}`)
        }
    }
    return (
        <>
            <tr>
                <td className='font-semibold'>{productName}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td className='font-semibold'>${price}</td>
                <td>{quantity} p</td>
                <td>
                    {/* <Link to={`/details/${_id}`}>
                        <button className='btn bg-orange-400 hover:bg-orange-500'>View Details</button>
                    </Link> */}
                    <button onClick={() => handleDetails(_id)} className='btn bg-orange-400 hover:bg-orange-500'>View Details</button>
                </td>
            </tr>
        </>


    );
};

export default AllToyRow;