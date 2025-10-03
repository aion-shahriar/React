import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name,username} = use(userPromise);
    return (
        <div>
            <p><small>User name: {username}</small></p>
            <h2>Name: {name}</h2>
        </div>
    );
};

export default UserDetails2;