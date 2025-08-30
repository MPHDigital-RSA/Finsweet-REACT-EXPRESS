import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/PostCard2.css'

const PostCard2 = ({ post }) => {

    // const [post, setPost] = useState([]);
    // const [isPostLoaded, setIsPostloaded] = useState(false);

    // // retrieve the id
    // const { id } = useParams();

    // useEffect(() => {
    //     try {
    //         axios(`http://localhost:3001/api/posts/${id}`).then(post => {
    //             setPost(post.data);
    //             setIsPostloaded(true);
    //         });

    //     } catch (error) {
    //         console.log(error);
    //         setIsPostloaded(false);
    //         setArePostsloaded(false);
    //     }

    // }, []);

    return (
        <div className="postcard-2">
            <div className="image">
                <img src={post.thumbnail} alt="" />
            </div>
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
    )
}

export default PostCard2
