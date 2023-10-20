import { useLoaderData } from 'react-router-dom';
import { useEffect,useState } from 'react';
import AddCart from './AddCart';

const MyCart = () => {
    const loadedCarts = useLoaderData()
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
        <div>
        {noFound ? (
            <p>{noFound}</p>
        ) : (
            carts.map((cart) => <AddCart key={cart._id} cart={cart} />)
        )}
        </div>
    );
};

export default MyCart;