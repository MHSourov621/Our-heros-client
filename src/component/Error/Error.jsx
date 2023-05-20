import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=''>
            <img className='mx-auto' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1684591777~exp=1684592377~hmac=a04403c8abdc7ab77a7f296d4af64f76d532cc02153c5174e988f6221014fe1c" alt="" />
            <div className='text-center'>
                <Link>
                    <button className='btn bg-yellow-400 hover:bg-yellow-500 text-xl text-black '>Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;