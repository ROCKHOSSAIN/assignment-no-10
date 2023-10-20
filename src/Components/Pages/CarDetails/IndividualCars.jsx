import React from 'react';

const IndividualCars = ({showDetailCars}) => {
    const {name, brandName, type, price, photo, rating, description} = showDetailCars
    return (
        <div className='py-20 '>
            <div className='flex flex-col md:flex-row container mx-auto gap-10 md:gap-20 justify-center'>

            <img className='w-full md:w-[800px] h-full md:h-[1020px]' src={photo} alt="" />
            <div className='space-y-4 '>

            <h1 className='text-xl md:text-5xl font-poppins'>{name}</h1>
            <h1 className='text-xl md:text-5xl '>{brandName}</h1>
            <h1 className='text-xl md:text-5xl '>{type}</h1>
            <h1 className='text-xl md:text-5xl '>{rating} Star</h1>
            <h2 className='text-xl font-semibold'>Price: ${price}</h2>
            <h2 className='text-xl md:w-1/2'>{description}</h2>
            <h1 className='p-5 bg-purple-500 text-white font-poppins md:w-1/2'>Add To Cart</h1>
            </div>
            </div>
        </div>
    );
};

export default IndividualCars;