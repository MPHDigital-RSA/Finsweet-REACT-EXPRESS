import { useParams } from 'react-router-dom';
import '../styles/BlogPost.css';

import businessIcon from "../assets/business-icon.svg"
import startupIcon from "../assets/startup-icon.svg"
import economyIcon from "../assets/economy-icon.svg"
import technologyIcon from "../assets/technology-icon.svg"
import { useEffect, useState } from 'react';
import axios from 'axios';


const BlogPost = () => {

    const [post, setPost] = useState([]);
    const [isPostLoaded, setIsPostloaded] = useState(false);

    // retrieve the id
    const { id } = useParams();

    useEffect(() => {
        try {
            axios(`http://localhost:3001/api/posts/${id}`).then(post => {
                setPost(post.data);
                setIsPostloaded(true);
            })
        } catch (error) {
            console.log(error);
            setIsPostloaded(false);
        }

    }, []);

    console.log(post)

    function handleIcon(post) {
        if (post.category == 'business') {
            return <img src={businessIcon} />
        } else if (post.category == 'startup') {
            return <img src={startupIcon} />
        } else if (post.category == 'technology') {
            return <img src={technologyIcon} />
        } else {
            return <img src={economyIcon} />
        }
    }

    console.log(post)

    return (
        <main className='blog-post'>
            {
                isPostLoaded ?

                    <section section className='blog-heading' >
                        <div className="profile">
                            <img src={post.user.avatar} alt="" className="avatar" />
                            <div className="profile-text">
                                <h3 className="name">{post.user.name}</h3>
                                <p className="body-1 date">
                                    {`Posted on ${post.createdAt.slice(0, 10)}`}
                                </p>
                            </div>
                        </div>
                        <h2>
                            {post.title}
                        </h2>

                        <div className="category">
                            <div className="category-icon">
                                {post.category === 'business' && <img src={businessIcon} />}
                                {post.category === 'technology' && <img src={technologyIcon} />}
                                {post.category === 'startup' && <img src={startupIcon} />}
                                {post.category === 'economy' && <img src={economyIcon} />}

                            </div>
                            <p className="cap-1">
                                {post.category}
                            </p>
                        </div>
                    </section > :
                    <p>Loading</p>
            }
            <section className='wrapper blog-image'>
                <img src={post.thumbnail} alt="" />
            </section>

        </main >

    )
}

export default BlogPost
