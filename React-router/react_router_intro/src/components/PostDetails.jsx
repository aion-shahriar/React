import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }


    const post = useLoaderData();


    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={handleGoBack}>Simon, Go Back</button>

        </div>
    );
};

export default PostDetails;