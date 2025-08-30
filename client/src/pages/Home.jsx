import FeaturedPost from '../components/FeaturedPost';
import PostNavigationCard from '../components/PostNavigationCard';
import '../styles/Home.css'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import businessIcon from "../assets/business-icon.svg";
import startupIcon from "../assets/startup-icon.svg";
import economyIcon from "../assets/economy-icon.svg";
import technologyIcon from "../assets/technology-icon.svg";
import CategoryCard from '../components/CategoryCard';

import whyImage from '../assets/why-big-image.png'
import AuthorCard from '../components/AuthorCard';
import Cta from '../components/Cta';

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

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

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [arePostsLoaded, setArePostsLoaded] = useState(false);

    const [authors, setAuthors] = useState([]);
    const [areAuthorsLoaded, setAreAuthorsLoaded] = useState(false);

    useEffect(() => {
        try {
            axios(`http://localhost:3001/api/posts`).then(posts => {
                setPosts(posts.data)
                setArePostsLoaded(true);

                // grab all the posts and extract the Authors
                let allAuthors = [];

                posts.data.map((post) => {
                    allAuthors.push(post.user);
                })

                setAuthors(allAuthors);
                setAreAuthorsLoaded(true);
            })
        } catch (error) {
            console.log(error);
            setArePostsLoaded(false);
        }

    }, []);


    return (
        <main className='home'>
            <section className="hero">
                <div className="wrapper">
                    <div className="hero-text">
                        <p className='subheading cap-1  '>
                            Posted on <span>Startup</span>
                        </p>
                        <h1>Step-by-step guide to choosing great font pairs</h1>
                        <p className='author-and-date body-1'>By <span>James West</span>  |  May 23, 2022 </p>

                        <p className='hero-description body-1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                        <a href="#" className="button yellow">Read More ‣</a>
                    </div>
                </div>
            </section>

            <section className='featured-section wrapper'>

                <h2 className='featured-heading'>Featured Post</h2>
                <div className="all-posts">
                    <h2 className='all-posts-heading'>All Posts</h2>

                    <a href="#" className='view-all-link'>View all</a>
                </div>

                <div className='featured-post'>
                    {arePostsLoaded ? <FeaturedPost posts={posts} /> : <p>Loading</p>}
                </div>


                {
                    arePostsLoaded ? <div className="all-posts-navigation">

                        {posts.slice(1, 5).map((post, index) => (
                            <PostNavigationCard post={post} key={index} />
                        ))}
                    </div>
                        : <p>Loading</p>
                }



            </section>

            <section className="mission-and-about wrapper">
                <div className=" grid ">
                    <div className="about">
                        <div className="cap-1 body-1">About us</div>
                        <h3>We are a community of content writers who share their learnings</h3>
                        <p className="body-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <Link to="/about" className='button white'>Read More ‣</Link>
                    </div>
                    <div className="mission">
                        <div className="cap-1 body-1">our mission</div>
                        <h3>Creating valuable content for creatives all around the world</h3>
                        <p className="body-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </section>

            <section className="category wrapper">

                <h2>Choose A Category</h2>
                <div className="category-items-container">
                    {
                        categories.map(category => (
                            <CategoryCard category={category} key={category.title} />
                        ))
                    }
                </div>
            </section>

            <section className="why-we-started wrapper">
                <div className="image">
                    <img src={whyImage} alt="" />
                </div>

                <div className="info">
                    <p className="cap-1">why we started</p>
                    <h2>It started out as a simple idea and evolved into our passion</h2>
                    <p className="body-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <Link to="/about" className='button yellow'>Discover our story ‣</Link>
                </div>
            </section>

            <section className="wrapper">
                <section className="authors">
                    <h2>List of Authors</h2>

                    {
                        areAuthorsLoaded ?
                            <div className="authors-flex">
                                {
                                    authors.slice(1, 5).map((author, index) => (
                                        <AuthorCard author={author} key={index} />
                                    ))

                                }
                            </div> :

                            <p>Loading</p>
                    }
                </section>
            </section>

            <div className="wrapper">
                <section className="testimonials">
                    <div className="testimonial-text">
                        <p className="cap-1">Testimonials</p>
                        <h2>What people say about our blog</h2>
                        <p className="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>

                    <div className="testimonial-carousel">
                        <h4 className="testimonial-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h4>

                        <div className="testimonial-profile">
                            <img src={whyImage} alt="" className="testimonial-avatar" />
                            <div className="profile-info">
                                <h5>Jonathan vallem</h5>
                                <p className="body-1">New york, USA</p>
                            </div>
                        </div>

                        <div className="carousel-navigation">
                            <button>
                                <FaArrowLeft />
                            </button>
                            <button>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <section className="cta-container">
                <Cta />
            </section>
        </main>
    )
}

export default Home
