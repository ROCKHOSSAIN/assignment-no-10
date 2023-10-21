import React from 'react';
import { Link } from 'react-router-dom';

const AvailableBrands = () => {
    const brands = [
        {   index:1,   
            brandName: "Lamborghini",
            imageUrl: "https://i.ibb.co/G2WyNtq/lamborginni.jpg"
        },
        {   index:2,
            brandName: "BMW",
            imageUrl: "https://i.ibb.co/Ns3s8kj/bmw.jpg"
        },
        {   index:3,
            brandName: "MercedesBenz",
            imageUrl: "https://i.ibb.co/ZJTV91b/marcedes.jpg"
        },
        {   index:4,
            brandName: "Ford",
            imageUrl: "https://i.ibb.co/5GrmGJS/ford.jpg"
        },
        {   index:5,
            brandName: "Tesla",
            imageUrl: "https://i.ibb.co/mF8FHSw/tesla2.jpg"
        },
        {   index:6,
            brandName: "RollsRoyce",
            imageUrl: "https://i.ibb.co/FWQQPzc/Rolls.jpg"
        }
    ];

    return (
        <div className='py-20'>
            <h1 className='text-center text-sky-400 text-4xl font-poppins mb-10'>Available Brands</h1>
        <div className="grid  grid-rows-1 md:grid-cols-3 gap-10">
            {brands.map((brand, index) => (
                // <div key={index} className="bg-white p-4 shadow-md">
                //     <h2 className="text-xl font-bold mb-2">{brand.brandName}</h2>
                //     <img src={brand.imageUrl} alt={brand.brandName} className="w-full" />
                // </div>

                <Link key={index} to={`/brandName/${brand.brandName}`}>
                    <div className="card shadow-xl">
                        <figure><img className='h-[400px] w-[500px]'  src={brand.imageUrl} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center font-poppins  text-sky-400 font-semibold">{brand.brandName}</h2>   
                            
                        </div>
                    </div>
                </Link>


            ))}
        </div>

        </div>

    );
};

export default AvailableBrands;
