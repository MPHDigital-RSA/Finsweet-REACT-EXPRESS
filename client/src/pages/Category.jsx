import '../styles/Category.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard1 from '../components/PostCard1';
import CategoryCard from '../components/CategoryCard';

import businessIcon from "../assets/business-icon.svg"
import startupIcon from "../assets/startup-icon.svg"
import economyIcon from "../assets/economy-icon.svg"
import technologyIcon from "../assets/technology-icon.svg"

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


const Category = () => {

    const [posts, setPosts] = useState([]);
    const [arePostsLoaded, setArePostsLoaded] = useState(false);

    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        try {
            axios(`http://localhost:3001/api/posts`).then(posts => {
                // filter the array before updating to the posts variable
                setPosts(posts.data);
                setArePostsLoaded(true);
                // setFilteredPosts(filterPosts("Technology"));
            })
        } catch (error) {
            console.log(error);
            setArePostsLoaded(false);
        }

    }, []);

    function filterPosts(category) {
        if (posts) {
            const filteredPosts = posts.filter(posts => posts.category == category);
            return filteredPosts;
        } else {
            return
        }
    }

    return (
        <main className='category'>
            <section className='banner'>
                <h1>Business</h1>
                <p className="body-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
            </section>

            <section className="posts-and-categories wrapper">

                <div className="selected-posts">
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
                </div>

                <div className="categories-and-tags">
                    <h2>Categories</h2>

                    <div className="categories">
                        {
                            categories.map(category => (
                                <CategoryCard category={category} key={category.title} />
                            ))
                        }
                    </div>
                    <div className="tags"></div>
                </div>

            </section>

        </main>
    )
}

export default Category
