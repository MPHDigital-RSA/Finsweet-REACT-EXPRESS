import { useParams } from 'react-router-dom';
import '../styles/BlogPost.css';
import { Link } from "react-router-dom";

import businessIcon from "../assets/business-icon.svg"
import startupIcon from "../assets/startup-icon.svg"
import economyIcon from "../assets/economy-icon.svg"
import technologyIcon from "../assets/technology-icon.svg"
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard2 from '../components/PostCard2';
import Cta from '../components/Cta';


const BlogPost = () => {

    const [post, setPost] = useState([]);
    const [isPostLoaded, setIsPostloaded] = useState(false);

    const [posts, setPosts] = useState([]);
    const [arePostsLoaded, setArePostsloaded] = useState(false);

    // retrieve the id
    const { id } = useParams();

    useEffect(() => {
        try {
            axios(`http://localhost:3001/api/posts/${id}`).then(post => {
                setPost(post.data);
                setIsPostloaded(true);
            });

            axios(`http://localhost:3001/api/posts`).then(post => {
                setPosts(post.data);
                setArePostsloaded(true);
            });
        } catch (error) {
            console.log(error);
            setIsPostloaded(false);
            setArePostsloaded(false);
        }

    }, []);

    console.log(posts)

    function handleIcon(post) {
        if (post.category === 'Business') {
            return <img src={businessIcon} />
        } else if (post.category === 'Startup') {
            return <img src={startupIcon} />
        } else if (post.category === 'Technology') {
            return <img src={technologyIcon} />
        } else {
            return <img src={economyIcon} />
        }
    }


    return (
        <main className='blog-post'>
            {
                isPostLoaded ?

                    <section className='blog-heading' >
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
                                {handleIcon(post)}
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

            <section className=" text-content wrapper">
                <div className="text-group">
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </h2>

                    <p className="body-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>
                </div>
                <div className="text-group">
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </h2>

                    <p className="body-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>
                    <p className="body-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>

                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Non blandit massa enim nec scelerisque</li>
                        <li>Neque egestas congue quisque egestas</li>
                    </ul>
                    <p className="body-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>
                </div>

                <div className="text-group">
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </h2>

                    <p className="body-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>
                </div>
            </section>

            <section className="read-next wrapper">
                <h2>What to read next</h2>

                {
                    arePostsLoaded ?
                        <div className='posts-container'>
                            {
                                posts.slice(0, 3).map((post) => (

                                    <Link to={`/post/${post._id}`} key={post._id} className='post-link'>
                                        <PostCard2 post={post} />
                                    </Link>

                                ))
                            }
                        </div> :
                        <p>Loading...</p>
                }

            </section>

            <section className="cta-container">
                <Cta />
            </section>

        </main >

    )
}

export default BlogPost
