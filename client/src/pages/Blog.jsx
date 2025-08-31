import '../styles/Blog.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cta from '../components/Cta';

import businessIcon from "../assets/business-icon.svg"
import startupIcon from "../assets/startup-icon.svg"
import economyIcon from "../assets/economy-icon.svg"
import technologyIcon from "../assets/technology-icon.svg"

import CategoryCard from '../components/CategoryCard';
import PostCard1 from '../components/PostCard1';


const categories = [
    {
        icon: businessIcon,
        title: "Business",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        icon: startupIcon,
        title: "Startup",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        icon: economyIcon,
        title: "Economy",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        icon: technologyIcon,
        title: "Technology",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
]

const Blog = () => {

    const [posts, setPosts] = useState([]);
    const [arePostsLoaded, setArePostsLoaded] = useState(false);

    useEffect(() => {
        try {
            axios(`https://finsweet-backend.vercel.app/api/posts`).then(posts => {

                // THE OLD WAY I DID IT 😂
                // const allPosts = []

                // posts.data.forEach(post => {
                //     post.forEach(item => {
                //         allPosts.push(item);
                //     })
                // });

                // setPosts(allPosts);
                // setArePostsLoaded(true);
                // console.log(allPosts);

                // THE BETTER WAY 😎 
                // console.log(posts.data)
                setPosts(posts.data)
                setArePostsLoaded(true);
            })
        } catch (error) {
            console.log(error);
            setArePostsLoaded(false);
        }

    }, []);


    let index = 1;

    return (
        <main className='blog'>
            <section className="banner">
                {
                    arePostsLoaded ? <div className="wrapper">
                        {
                            <div className="banner-text">
                                <div className="cap-1">Featured Post</div>
                                <h2>{posts[index].title}</h2>
                                <p className='body-1'>By <a href="#" className='body-1 author-link'> {posts[index].user.name} </a>| {posts[index].createdAt.slice(0, 10)}</p>
                                <p className="body-1">
                                    {posts[index].description}
                                </p>
                                <a href={`/post/${posts[index]._id}`} className='button yellow'>Read More ‣</a>
                            </div>

                        }
                        <div className="banner-image"><img src={posts[index].thumbnail} alt="" width={515} height={359} /></div>
                    </div> :
                        <p className='wrapper'>Loading</p>
                }
            </section>

            <section className='wrapper posts'>
                <h1>All posts</h1>

                {arePostsLoaded ?

                    <div className="posts-container">
                        {
                            posts.map((post, index) => (

                                <PostCard1 post={post} key={index} />

                            ))
                        }
                    </div> :
                    <p>loading</p>
                }


                <div className="posts-nav">
                    <a href="#" className="link">
                        ‹ Prev
                    </a>
                    <a href="#" className="link">
                        Next ›
                    </a>
                </div>
            </section>

            <section className="category wrapper">

                <h2>All Categories</h2>
                <div className="category-items-container">
                    {
                        categories.map(category => (
                            <CategoryCard category={category} key={category.title} />
                        ))
                    }
                </div>
            </section>

            <section className="cta-container">
                <Cta />
            </section>

        </main>
    )
}

export default Blog
