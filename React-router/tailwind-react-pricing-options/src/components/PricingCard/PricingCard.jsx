import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
   console.log(pricing)

    const {name, price, description, features} = pricing;
    return (
        <div className='border bg-green-300 rounded-2xl p-4'>
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>

            <div className='bg-blue-100 p-4 rounded-2xl mt-10 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature,index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className='btn w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;