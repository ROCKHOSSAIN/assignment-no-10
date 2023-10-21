import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BrandCards from './BrandCards';
import Advertisement from '../Advertisements/Advertisement';

const BrandDetails = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    const [Brand, setBrand] = useState([]);
    const [brandload, setbrandload] = useState(loadedData)
    const [noFound, setnoFound] = useState(null)

    const { brandName } = useParams();

    useEffect(() => {
        const filterData = loadedData.filter(item => item.brandName === brandName)
        setBrand(filterData)
        if (filterData.length > 0) {
            setbrandload(loadedData)
        }
        else {
            setnoFound('No Data Found!!')
        }
    }, [brandName, loadedData])
    return (
        <div >
            <Advertisement></Advertisement>
            <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto py-20 gap-20'>

                {noFound ? (
                    <p className='mx-auto text-red-600 text-3xl'>{noFound}</p>
                ) : (

                    Brand.map(brandCars => <BrandCards key={brandCars._id} brandCars={brandCars}></BrandCards>)
                )

                }
            </div>
        </div>

    );
};

export default BrandDetails;