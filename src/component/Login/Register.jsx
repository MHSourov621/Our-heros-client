import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const Register = () => {
    const { createUser, updateUserProfile, user } = useContext(AuthContext);
    const [error, setError] = useState('');
    useTitle('Register');


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        if(password.length < 6 ){
            setError('Password should be minimum 6 characters');
            return
        }
        else{
            setError('')
        }

        createUser(email, password)
            .then(result => {
            const user = result.user;
            console.log(user);
            if(user){
                updateUserProfile({ displayName : name, photoURL : photo });
                form.reset()
            }
        })
        .catch(err => {
            // console.log(err.message);
        })
    }
    // console.log(user);
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-orange-400 font-semibold my-6">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <p className='text-red-600 text-lg ml-8 pt-8'>{error}</p>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Image Url" name="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" required className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-lg bg-orange-400 text-white hover:bg-orange-500">Register</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;