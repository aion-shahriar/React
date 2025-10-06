import React from 'react';
import Child from './Child';

const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <Child asset={asset}></Child>
        </div>
    );
};

export default Myself;