import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BrandCards from './BrandCards';

const BrandDetails = () => {
    const loadedData = useLoaderData()
    const [Brand,setBrand] = useState([]);
    const {brandName} = useParams();
    useEffect(()=>{
        const filterData = loadedData.filter(item=>item.brandName===brandName)
        setBrand(filterData)
    },[brandName,loadedData])
    console.log(loadedData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto py-20 gap-20'>
            {
                Brand.map(brandCars=><BrandCards key={brandCars._id} brandCars={brandCars}></BrandCards>)
            }
        </div>
    );
};

export default BrandDetails;