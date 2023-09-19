import React from 'react';
import './post.css'
const Posts = ({p}) => {
    const {userId, id, title, body} = p;
    return (
        <div className='postcontainer'>
            <h1 className='text-4xl font-semibold mb-3'>{title}</h1>
            <p className='text-xl'> {body}</p> 
        </div>
    );
};

export default Posts;