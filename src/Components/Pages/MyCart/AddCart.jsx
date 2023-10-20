import React from 'react';

const AddCart = ({ cart }) => {
    const { photo,name, brandName, type, price, description } = cart
    return (
        <div className='py-20'>
            <div className=" bg-gray-300 shadow-xl image-full">
                <figure><img className='w-[600px] h-[500px]' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{brandName}</p>
                    <p>{description}</p>
                </div>
            </div>        </div>
    );
};

export default AddCart;