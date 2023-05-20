import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyRow from './AllToyRow';

const AllToys = () => {
    const [search, setSearch] = useState();
    const [heros, sethHeros] = useState([]);

    useEffect(() => {
        fetch('https://our-heros-server.vercel.app/products')
            .then(res => res.json())
            .then(data => sethHeros(data))
    }, [])

    const handleSearch = () => {
        fetch(`https://our-heros-server.vercel.app/searchByProductName/${search}`)
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