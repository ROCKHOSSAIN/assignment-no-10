import { useLoaderData } from 'react-router-dom';
import { useEffect,useState } from 'react';
import AddCart from './AddCart';
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';

const MyCart = () => {
    const {user} = useContext(AuthContext)
    const loadedCarts = useLoaderData()
    console.log(user.email)
    console.log(loadedCarts.currentPerson,'another')

    const [carts,setcarts] = useState(loadedCarts)
    console.log(loadedCarts)
    const [noFound,setnoFound] =useState(null)
    useEffect(() => {
        if (loadedCarts.length > 0) {
            setcarts(loadedCarts);
            console.log('more than 1');
        } else {
            setnoFound('no data found');
        }
    }, [loadedCarts]);
    
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto  gap-10 md:gap-20'>
        {noFound ? (
            <p>{noFound}</p>
        ) : (
            carts.map((cart) => <AddCart key={cart._id} cart={cart} />)
        )}
        </div>
    );
};

export default MyCart;