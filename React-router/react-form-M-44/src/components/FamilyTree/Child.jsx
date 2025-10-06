import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Child = ({asset}) => {

    const newAsset = useContext(AssetContext);
    console.log(newAsset);
    return (
        <div>
            <h2>Child</h2>
            <p>Asset: {asset}</p>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Child;