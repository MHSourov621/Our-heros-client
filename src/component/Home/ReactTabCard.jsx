import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ReactTabCard = ({ hero }) => {
    const { _id, productName, photo, price, rating } = hero;
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
            navigate(`/details/${id}`)
        }
        else{
            navigate(`/details/${id}`)
        }
    }
    return (
        <div>
            <div data-aos="fade-up-left" className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl w-[800px] h-[400px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl mb-4">{productName}</h2>
                    <div className='flex mb-4 text-lg'>
                        <p className='mr-8'>Price: ${price}</p>
                        <p>Rating: {rating} star</p>
                    </div>
                    <div className="card-actions">
                        {/* <Link to={`/details/${_id}`}>
                            <button className="btn bg-orange-400 hover:bg-orange-500">View Details</button>
                        </Link> */}
                        <button onClick={() => handleDetails(_id)} className="btn bg-orange-400 hover:bg-orange-500">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactTabCard;