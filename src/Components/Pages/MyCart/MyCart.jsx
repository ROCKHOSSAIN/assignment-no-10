import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddCart from './AddCart';
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const MyCart = () => {
    const { user } = useContext(AuthContext)
    const loadedCarts = useLoaderData()
    console.log(loadedCarts)
    console.log(user.email)
    console.log(loadedCarts.currentPerson, 'another')
    const myuser = user?.email

    const [carts, setcarts] = useState(loadedCarts)
    console.log(loadedCarts)
    const [noFound, setnoFound] = useState(null)
    
    useEffect(() => {
        if (myuser && loadedCarts.length > 0) {

            const currentCart = loadedCarts.filter(item => item.currentPerson === myuser)
            console.log(currentCart)
            setcarts(currentCart)
        }
    }, [myuser,loadedCarts])

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
    
    
                fetch(`https://assignment-no-10-server-three.vercel.app/myCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
    
                            const remainingUsers = carts.filter(user => user._id !== _id)
                            setcarts(remainingUsers)
                            Swal.fire(
                                'Deleted!',
                                'Your Car Product has been deleted.',
                                'success'
                            )
                        }
                    })
    
            }
        })
}
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto  gap-10 md:gap-20 py-10'>
            {carts.length===0 ? (
                <p className='text-red-500 mx-auto text-3xl'>there is no data</p>
            ) : (
                carts.map((cart) => <AddCart key={cart._id} handleDelete={handleDelete} cart={cart} />)
            )}
        </div>
    );
};

export default MyCart;