import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';

const IndividualCars = ({showDetailCars}) => {
    const {user} = useContext(AuthContext)
    const email = user.email
    const {name, brandName, type, price, photo, rating, description,_id} = showDetailCars

    const handleAddToCart=(_id)=>{
        fetch(`http://localhost:5000/myCart/${_id}`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(showDetailCars)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "You have added this into your CART !",
                        icon: "success",
                        button: "Aww yesss!",
                    });
                }
            })
    }
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
            <Link to={`/myCart/${_id}`}>
            <button onClick={()=>handleAddToCart(_id)} className='p-5 bg-purple-500 text-white font-poppins md:w-1/2 mt-10'>Add To Cart</button>
            </Link>
            </div>
            </div>
        </div>
    );
};

export default IndividualCars;