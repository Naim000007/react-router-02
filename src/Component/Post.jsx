import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from './Posts';

const Post = () => {
    const post = useLoaderData()
    return (
        <div>
            <h1>post length {post.length}</h1>
            <div>
                {
                    post.map(p => <Posts
                    key={p.id}
                    p ={p} />)
                }
            </div>
        </div>
    );
};

export default Post;