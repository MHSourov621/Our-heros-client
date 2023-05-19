import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateToy = () => {
    const product = useLoaderData();
    const {_id, details, price, quantity} = product;
    const notify = () => toast("Updated Toy Successfully");
    const navigate = useNavigate()

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const details = form.details.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        // console.log(price, details, quantity);
        const updatedProduct ={price, quantity, details};

        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.modifiedCount > 0){
                notify()
                navigate('/myToy')
            }
        })
    }
    return (
        <div className='mt-14 mb-28'>
            <div className='text-6xl text-orange-500 text-center mb-10'>
                <h2 className='border-b-2 border-orange-400 inline'>Update Toy</h2>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='flex justify-center'>
                    <div className="form-control mr-20">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price } placeholder="price" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <input type="text" name="details" defaultValue={details} placeholder="details" className="input input-bordered" />
                </div>
                <div className='mx-auto w-1/3  mt-6'>
                    <input className='text-2xl font-semibold text-white w-full py-3 bg-orange-400 hover:bg-orange-500 cursor-pointer rounded-xl' type="submit" value="Update Toy" />
                </div>
            </form>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default UpdateToy;