import React from 'react';

const Gallery = () => {
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className='mb-28 mt-10'>
            <div className='text-6xl text-orange-500 text-center mb-10'>
                <h2 className='border-b-2 border-orange-400 inline'>Gallery Section</h2>
            </div>
            <div className='md:border-8 md:p-2'>
                <div className='md:flex mb-4'>
                    <div className='md:flex'>
                        <img className='h-[600px]' src="https://m.media-amazon.com/images/I/81hPj9i+LCL._AC_SX679_.jpg" alt="" />
                        <img className='h-[600px]' src="https://m.media-amazon.com/images/I/716jvoBzF1L._AC_SX679_.jpg" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <img className='h-[300px]' src="https://m.media-amazon.com/images/I/41OwqG0vnWL.jpg" alt="" />
                        <img className='h-[300px]' src="https://images.meesho.com/images/products/69413863/nai11_512.webp" alt="" />
                    </div>
                    <img className='h-[600px]' src="https://m.media-amazon.com/images/I/71yM1kmx9ML._AC_SX679_.jpg" alt="" />
                </div>
                <div>
                    <div className='md:flex'>
                        <img src="https://m.media-amazon.com/images/I/815GXLePGtL._SX522_.jpg" alt="" />
                        <div className='flex flex-col'>
                            <img className='h-[300px] mt-4' src="https://i.ebayimg.com/images/g/PzkAAOSwZrhhCPvh/s-l1600.jpg" alt="" />
                            <img className='h-[300px] mt-6' src="https://i.ebayimg.com/images/g/jgwAAOSw~lpjK6ob/s-l1600.jpg" alt="" />
                        </div>
                        <img src="https://m.media-amazon.com/images/I/713kYknVIdL._SX522_.jpg" alt="" />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;