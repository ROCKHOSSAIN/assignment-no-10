const LatestCars = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center py-10"> {/* Adjusted py value */}
                <h2 className="text-lg font-poppins">CheckOut the Latest Cars</h2>
                <h1 className="text-4xl font-poppins">Newsest <span className="text-[skyblue]">Cars</span> </h1>
                <hr className="b-4 w-0 md:w-28 border-blue-500 mx-auto mt-6"/> {/* Adjusted mt value */}
            </div>
            <div className="flex flex-col md:flex-row">
                <div>
                    <img className="w-full md:w-[500px]" src="/images/lastestCar.png" alt="" />
                </div>
                <div></div>
                <div className="flex flex-col items-center justify-center md:w-1/2 mx-auto my-10 text-start">
                    <h1 className="text-2xl font-semibold mb-4 md:mb-10">BMW M4</h1>
                    <p className="text-lg text-gray-500 opacity-45 leading-loose">The standard M4 comes with rear-wheel drive, a six-speed manual transmission, and a fiery 473-hp twin-turbo inline-six engine; M4 Competition models have 503 horsepower. Both models can be had with an optional eight-speed automatic, the only transmission sold with the optional xDrive all-wheel-drive system. <br />
                    The BMW M4 boasts a sleek and aerodynamic design that exudes a sense of sportiness and luxury. Its exterior typically features a distinctive and aggressive front fascia, with a large front grille, sharp headlights, and sculpted lines that contribute to its athletic appeal. The M4 often comes equipped with larger alloy wheels, performance tires, and a sporty rear diffuser, enhancing its overall dynamic appearance.</p>
            <button className="p-3 rounded-e-3xl bg-blue-500 mt-10 text-white  mr-0 md:mr-[650px]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default LatestCars;
