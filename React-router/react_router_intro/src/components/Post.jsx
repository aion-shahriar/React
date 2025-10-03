import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {

    const {id, title} = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`);

    }



    return (
        <div style={{border: '2px solid blue', margin: '10px', padding: '10px', borderRadius: '10px'}}>
            <h3>Post ID: {id}</h3>
            <h4>Post Title: {title}</h4>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of : {id} </button>
        </div>
    );
};

export default Post;