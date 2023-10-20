import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import IndividualCars from './IndividualCars';

const CarDetails = () => {
    const {id} = useParams();
    const details = useLoaderData();
    const showDetailCars = details.find(detail=>detail._id===id)
    console.log(showDetailCars)
    return (
        <div>
            <IndividualCars showDetailCars={showDetailCars}></IndividualCars>
        </div>
    );
};

export default CarDetails;