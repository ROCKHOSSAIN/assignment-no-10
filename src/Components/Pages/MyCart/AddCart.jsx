import {  useState } from 'react';

const AddCart = ({ cart,handleDelete }) => {
    const { photo, name, brandName, description, _id } = cart
    // const [users,setUsers] = useState({cart})
   
    return (

        <div className='py-20'>
            <div className=" bg-gray-300 shadow-xl image-full">
                <figure><img className='w-full h-[500px]' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{name}</h2>
                    <p className='text-black '>{brandName}</p>
                    <p className='text-black '>{description}</p>
                    <button onClick={() => handleDelete(_id)} className='bg-red-500 p-3 text-black font-poppins text-xl'>DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default AddCart;