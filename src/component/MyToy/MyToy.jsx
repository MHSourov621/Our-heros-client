import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyRow from './MyToyRow';
import { ToastContainer, toast } from 'react-toastify';

const MyToy = () => {
    const [heros, setHeros] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() =>{
        fetch(`http://localhost:5000/email/${user?.email}`)
        .then(res => res.json())
        .then(data => setHeros(data))
    },[])
    return (
        <div className='mt-20 mb-20'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            heros.map(hero => <MyToyRow
                                key={hero._id}
                                hero={hero}
                            ></MyToyRow>)
                        }
                       
                    </tbody>

                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyToy;