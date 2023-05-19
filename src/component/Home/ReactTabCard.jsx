import React from 'react';
import { Link } from 'react-router-dom';

const ReactTabCard = ({ hero }) => {
    const { _id, productName, photo, price, rating } = hero;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
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
                        <Link to={`/details/${_id}`}>
                            <button className="btn bg-orange-400 hover:bg-orange-500">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactTabCard;