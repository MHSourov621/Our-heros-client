import React from 'react';

const WomanHeros = () => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className='mb-28'>
            <div className="md:flex md:flex-row-reverse bg-base-100 shadow-xl">
                <div className="card-body my-auto">
                    <h2 className="card-title text-6xl text-orange-400">Woman Heros Figure</h2>
                    <p className=' md:w-96 mt-12 text-xl'>There are some popular woman super heros. They all are iconic heros. All of them very rear figure and all are limited figure. If you want to buy one of them please pre oder us.  We can try to give you product very quickly.</p>
                </div>
                <figure>
                    <div className='grid md:grid-cols-2'>
                        <img className='w-[500px] h-[500px] md:border-r-8 md:border-b-8' src="https://www.mythfactoryshop.com/45868-large_default/Captain-Marvel-Premium-Collectibles-Studio-Marvel-future-revolution.jpg" alt="" />
                        <img className='w-[500px] h-[500px] md:border-b-8' src="https://media.karousell.com/media/photos/products/2022/12/2/prime_1_studios_museum_masterl_1669974479_826e12ad_progressive" alt="" />
                        <img className='w-[500px] h-[600px] md:border-r-8 md:p-5' src="https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/h/o/hotmms653_doctor_strange_in_the_multiverse_of_madness_-_the_scarlet_witch_deluxe_1_6th_scale_hot_toys_action_figure.png" alt="" />
                        <img className='w-[500px] h-[600px] md:p-5' src="https://www.superherohype.com/wp-content/uploads/sites/4/2021/07/9fb54340f6ae445bacce83dc13cde7f5lg.jpg" alt="" />
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default WomanHeros;