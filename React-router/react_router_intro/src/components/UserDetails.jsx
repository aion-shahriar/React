import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData();

    const params = useParams();


    const {website, name}=user;
    return (
        <div>
            <h2>User Details for {params.userId}</h2>
            <p>Name: {name}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;