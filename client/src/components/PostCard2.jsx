import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/PostCard2.css'

const PostCard2 = ({ post }) => {

    return (
        <a href={`/post/${post._id}`} className="postcard-2">
            <div className="image">
                <img src={post.thumbnail} alt="" />
            </div>
            <div className="post-card-2-body">
                <p className='body-1'>
                    By <span className='body-1 author-link'> {post.user.name} </span>| {post.createdAt.slice(0, 10)}
                </p>

                <h4>
                    {post.title}
                </h4>

                <p className="body-1">
                    {post.body}
                </p>
            </div>
        </a>
    )
}

export default PostCard2
