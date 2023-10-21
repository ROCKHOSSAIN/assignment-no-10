import { useContext } from "react";
import swal from 'sweetalert';
import { AuthContext } from "../../Provider/AuthProvider";

const IndividualCars = ({showDetailCars}) => {
    const {user} = useContext(AuthContext)
    console.log(user.email)
    const {name, brandName, type, price, photo, rating, description,_id} = showDetailCars
   

    const handleAddToCart=(_id)=>{
    const currentPerson = user.email
        const cart ={
            currentPerson,
            name,
             brandName,
             type,
             price,
             photo,
             rating,
             description,
        

        }
        fetch(`https://assignment-no-10-server-three.vercel.app/myCart/${_id}`,
        {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cart)
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
            <button onClick={()=>handleAddToCart(_id)} className='p-5 bg-purple-500 text-white font-poppins md:w-1/2 mt-10'>Add To Cart</button>
            </div>
            </div>
        </div>
    );
};

export default IndividualCars;