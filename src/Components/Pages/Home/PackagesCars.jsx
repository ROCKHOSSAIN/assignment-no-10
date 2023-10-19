
const PackagesCars = () => {
    return (
        <div className='py-44'>
            <h1 className='text-center text-2xl font-poppins font-semibold  text-blue-500 mb-20'>Featured Cars</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

            <div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-yellow-800 dark:hover:bg-gray-700">
                <img className="object-cover rounded-t-lg h-auto md:h-[390px] w-full md:w-72 md:rounded-none md:rounded-l-lg" src="https://i.ibb.co/hLbTrKd/tyler-clemmensen-w-Lp-TPp2dzs-Y-unsplash.webp" alt="" />
                <div className="flex flex-col justify-between p-4 space-y-5">
                    <h2 className='text-lg font-poppins text-white'>2023 | Hybrid </h2>
                    <h1 className='text-xl font-poppins text-white'>Highlander</h1>
                    <h5 className="mb-2 text-xl font-bold dark:text-white">Go above and beyond the ordinary</h5>
                    <div>

                  <div className='text-white '>
                  <h2 className='text-2xl'>$36,620</h2>
                   <p>Starting MSRP*</p>
                  
                  </div>
                  <div className='text-white flex justify-between mt-5'>
                  <button className='bg-white text-black font-poppins p-3 rounded-e-3xl'>Explore</button>
                <button className='font-poppins '>Build {">"} </button>
                  </div>
                    </div>
                </div>
            </div>
            <div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-auto md:h-[390px] md:w-72 md:rounded-none md:rounded-l-lg" src="https://i.ibb.co/7ngKq6Z/Mercedes.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 space-y-5">
                    <h2 className='text-lg font-poppins text-white'>2023 | All-Electric</h2>
                    <h1 className='text-xl font-poppins text-white'>BZ4X</h1>
                    <h5 className="mb-2 text-xl font-bold dark:text-white">Faster than ever to go beyond the crossmark</h5>
                    <div>

                  <div className='text-white '>
                  <h2 className='text-2xl'>$42,000</h2>
                   <p>Starting MSRP*</p>
                  
                  </div>
                  <div className='text-white flex justify-between mt-5'>
                  <button className='bg-white text-black font-poppins p-3 rounded-e-3xl'>Explore</button>
                <button className='font-poppins '>Build {">"}</button>
                  </div>
                    </div>
                </div>
            </div>
            <div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-green-900 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-auto md:h-[390px] md:w-72 md:rounded-none md:rounded-l-lg" src="https://i.ibb.co/1fsVVPW/Audi.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 space-y-5">
                    <h2 className='text-lg font-poppins text-white'>2023 | Hybrid</h2>
                    <h1 className='text-xl font-poppins text-white'>Highlander Hybrid</h1>
                    <h5 className="mb-2 text-xl font-bold dark:text-white">Designed to go the extra miles</h5>
                    <div>

                  <div className='text-white '>
                  <h2 className='text-2xl'>$40,699</h2>
                   <p>Starting MSRP*</p>
                  
                  </div>
                  <div className='text-white flex justify-between mt-5'>
                  <button className='bg-white text-black font-poppins p-3 rounded-e-3xl'>Explore</button>
                <button className='font-poppins '>Build {">"}</button>
                  </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default PackagesCars;
