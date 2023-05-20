import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyRow from './AllToyRow';
import useTitle from '../hooks/useTitle';

const AllToys = () => {
    const [search, setSearch] = useState();
    const [heros, sethHeros] = useState([]);
    const [sort, setSort] = useState(1);
    useTitle('All Toys');


    useEffect(() => {
        fetch(`https://our-heros-server.vercel.app/products?value=${sort}`)
            .then(res => res.json())
            .then(data => sethHeros(data))
    }, [sort])

    const handleSearch = () => {
        fetch(`https://our-heros-server.vercel.app/searchByProductName/${search}?value=${sort}`)
            .then(res => res.json())
            .then(data => sethHeros(data))
    }
    return (
        <div className='mt-8 mb-20 '>
            <div className='flex justify-center mb-8'>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="search" className="input input-bordered mr-4" />
                <button onClick={handleSearch} className='btn bg-orange-400 hover:bg-orange-500 mr-10'>Search</button>

                <select onChange={(e) => setSort(parseInt(e.target.value))} name="sort" className="select select-bordered">
                    <option value={1} disabled selected>Ascending </option>
                    <option value={-1}>Descending</option>
                    <option value={1}>Ascending</option>
                </select>
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