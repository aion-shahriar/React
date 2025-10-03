import React, { use } from 'react';

const Users2 = ({usersPromise}) => {

    const users = use(usersPromise);

    console.log('users2 data load: ', users);

    return (
        <div>
            <h2>Users2 component</h2>
        </div>
    );
};

export default Users2;