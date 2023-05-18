import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyRow from './AllToyRow';

const AllToys = () => {
    const products = useLoaderData();
    return (
        <div className='mt-8 mb-20'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Seller</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map(product => <AllToyRow
                                key={product._id}
                                product={product}
                            ></AllToyRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;