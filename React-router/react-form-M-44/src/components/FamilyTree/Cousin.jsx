import React from 'react';
import Child from './Child';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin: {name}</h2>
            {
                name === "Emily" && <Child asset={asset}></Child>
            }
            {
                name === "Ella" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;