import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/useTitle';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add a Toy');

    const notify = () => toast("New Toy Added successfully");

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.name.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const name = user.displayName;
        const email = user.email;
        const hero = {
            name, email, productName, photo, details, price, rating, category, quantity
        }

        fetch('https://our-heros-server.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(hero)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
                if (data.insertedId) {
                    notify()
                }
            })

    }

    return (
        <div className='mt-14 mb-28'>
            <div className='text-6xl text-orange-500 text-center mb-10'>
                <h2 className='border-b-2 border-orange-400 inline'>Add A Toy</h2>
            </div>
            <form onSubmit={handleAddToy}>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <input type="text" name="details" placeholder="details" className="input input-bordered" />
                </div>
                <div className='flex justify-center'>
                    <div className="form-control mr-16">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" name="category" placeholder="sub-category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="form-control mr-16">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />
                    </div>
                </div>
                <div className='mx-auto w-1/3  mt-6'>
                    <input className='text-2xl font-semibold text-white w-full py-3 bg-orange-400 hover:bg-orange-500 cursor-pointer rounded-xl' type="submit" value="Add Toy" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddToy;