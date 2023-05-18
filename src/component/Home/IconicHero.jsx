import React from 'react';
import img1 from "../../assets/image/image1.jpg";
import img2 from "../../assets/image/image2.jpg";
import img3 from "../../assets/image/image3.jpg";

const IconicHero = () => {
    return (
        <div className='mb-28'>
            <div className='text-6xl text-orange-500 text-center mb-16'>
                <h2 className='border-b-2 border-orange-400 inline'>Iconic Hero Figure</h2>
            </div>
            <div className='grid md:grid-cols-3 md:ml-12'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Iron Man Figure</h2>
                        <p className='text-lg'>Most uncommon and rear Figure.</p>
                        <p className='text-lg mb-8'>Price: <span className='text-orange-500 font-semibold'>$120</span></p>
                        <div className="card-actions justify-end">
                            <p className='text-lg text-orange-500'>Limited Edition</p>
                            <button className="btn bg-orange-400 hover:bg-orange-500 ">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Captain America Figure</h2>
                        <p className='text-lg'>Most uncommon and rear Figure.</p>
                        <p className='text-lg mb-8'>Price: <span className='text-orange-500 font-semibold'>$80</span></p>
                        <div className="card-actions justify-end">
                            <p className='text-lg text-orange-500'>Limited Edition</p>
                            <button className="btn bg-orange-400 hover:bg-orange-500 ">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Thor Figure</h2>
                        <p className='text-lg'>Most uncommon and rear Figure.</p>
                        <p className='text-lg mb-8'>Price: <span className='text-orange-500 font-semibold'>$95</span></p>
                        <div className="card-actions justify-end">
                            <p className='text-lg text-orange-500'>Limited Edition</p>
                            <button className="btn bg-orange-400 hover:bg-orange-500 ">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconicHero;