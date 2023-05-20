import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyToyRow = ({ hero, heros, setHeros }) => {
    const { _id, photo, productName, details, price, category, quantity } = hero;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this toy!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://our-heros-server.vercel.app/products/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )

                            const remaining = heros.filter(toy => toy._is !== id);
                            setHeros(remaining)
                        }
                    })
            }
        })
    }
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)}><AiFillDelete className='w-8 h-8 text-orange-500'></AiFillDelete></button>
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