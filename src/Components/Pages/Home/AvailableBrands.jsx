import React from 'react';

const AvailableBrands = () => {
    const brands = [
        {
            brandName: "Lamborginni",
            imageUrl: "https://i.ibb.co/G2WyNtq/lamborginni.jpg"
        },
        {
            brandName: "BMW",
            imageUrl: "https://i.ibb.co/Ns3s8kj/bmw.jpg"
        },
        {
            brandName: "Mercedes-Benz",
            imageUrl: "https://i.ibb.co/ZJTV91b/marcedes.jpg"
        },
        {
            brandName: "Ford",
            imageUrl: "https://i.ibb.co/5GrmGJS/ford.jpg"
        },
        {
            brandName: "Tesla",
            imageUrl: "https://i.ibb.co/mF8FHSw/tesla2.jpg"
        },
        {
            brandName: "Rolls-Royce",
            imageUrl: "https://i.ibb.co/FWQQPzc/Rolls.jpg"
        }
    ];

    return (
        <div className='py-20'>
            <h1 className='text-center text-4xl font-poppins mb-10'>Available Brands</h1>
        <div className="grid  grid-rows-1 md:grid-cols-3 gap-10">
            {brands.map((brand, index) => (
                // <div key={index} className="bg-white p-4 shadow-md">
                //     <h2 className="text-xl font-bold mb-2">{brand.brandName}</h2>
                //     <img src={brand.imageUrl} alt={brand.brandName} className="w-full" />
                // </div>
                <div key={index}>
                    <div className="card shadow-xl">
                        <figure><img className='h-[400px] w-[500px]'  src={brand.imageUrl} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center font-poppins">{brand.brandName}</h2>   
                            
                        </div>
                    </div>
                </div>


            ))}
        </div>
        </div>

    );
};

export default AvailableBrands;
