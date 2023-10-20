import React from 'react';

const AddCart = ({cart}) => {
    const {photo} = cart
    return (
        <div className='py-20'>
            <img src={photo} alt="" />
        </div>
    );
};

export default AddCart;