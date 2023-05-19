import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const hero = useLoaderData()
    console.log(hero);
    const { name, email, photo, productName, price, details, quantity, rating } = hero;
    return (
        <div className='mt-28 mb-28' >
            <div className="card card-side bg-base-100 shadow-xl p-11 w-[900px] mx-auto">
                <img className='w-[300px] h-[400px]' src={photo} alt="" />
                <div className="card-body bg-base-200 ml-12 rounded-2xl">
                    <h2 className="card-title text-5xl font-semibold text-orange-500">{productName}</h2>
                    <div className='mt-6'>
                        <p className='mb-2 text-xl'>Seller: {name}</p>
                        <p className='mb-8 text-xl'>Seller Email: {email}</p>
                        <p className='text-lg mb-4'>Price: <span className='text-orange-400 font-semibold'>$ {price}</span></p>
                        <div className='flex text-lg mb-8'>
                            <p>Rating: <span className='text-orange-400 font-semibold'>{rating} star</span></p>
                            <p>Available quantity: <span className='text-orange-400 font-semibold'>{quantity} p</span></p>
                        </div>
                    </div>
                    <div className="card-actions justify-end text-lg">
                        <p><span className='text-orange-400 font-semibold'>Product details:</span> {details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;