import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyRow from './AllToyRow';

const AllToys = () => {
    const [search, setSearch] = useState();
    const [heros, sethHeros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => sethHeros(data))
    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:5000/searchByProductName/${search}`)
        .then(res => res.json())
        .then(data => sethHeros(data))
    }
    return (
        <div className='mt-8 mb-20 '>
            <div className='flex justify-center mb-8'>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="search" className="input input-bordered mr-4" />
                <button onClick={handleSearch} className='btn bg-orange-400 hover:bg-orange-500'>Search</button>
            </div>
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
                            heros.map(product => <AllToyRow
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