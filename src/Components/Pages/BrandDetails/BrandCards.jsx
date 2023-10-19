const BrandCards = ({ brandCars }) => {
    const { name, brandName, type, price, photo, rating } = brandCars
    return (
        <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className="relative md:h-[700px] md:w-[600px]" src={photo} alt="Shoes" /></figure>
                <p className="absolute md:right-16 bottom-56 md:bottom-52  px-1 md:px-3 py-3 bg-green-600 text-white text-2xl">$ {price}</p>
                <div className="card-body">
                    <div className="text-center mx-auto space-y-1">

                    <h2 className="text-xl md:text-3xl font-poppins">{brandName}</h2>
                    <h2 className="text-base">{name}</h2>
                    <hr className="border-1 border-blue-500 md:w-1/3 mx-auto"/>
                    <hr className="border-1 border-blue-500  md:w-1/2 mx-auto"/>
                    </div>
                    <div className="flex  mx-auto gap-10 md:gap-32">

                    <p className="text-xl font-poppins">{type}</p>
                    <p className="text-xl font-poppins">{rating} Star</p>
                    </div>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">Description</button>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCards;