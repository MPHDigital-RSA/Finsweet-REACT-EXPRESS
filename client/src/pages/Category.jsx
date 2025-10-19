import '../styles/Category.css';
import { useEffect, useState } from 'react';
import PostCard1 from '../components/PostCard1';
import CategoryCard from '../components/CategoryCard';
import { useParams } from 'react-router-dom';
import usePostStore from '../stores/Posts.store';
import useCategoryStore from '../stores/Category.store';

const Category = () => {

    const { category } = useParams();

    // load [posts]
    const { loadAllPosts, arePostsLoaded, posts } = usePostStore();

    // load categories
    const { categories } = useCategoryStore();

    const [filteredPosts, setFilteredPosts] = useState([]);


    useEffect(() => {
        // load [all posts]
        loadAllPosts();

        filterPosts(category);

    }, [category]);

    function filterPosts(category) {
        if (posts) {
            const filteredPosts = posts.filter(posts => posts.category == category);
            setFilteredPosts(filteredPosts);
        } else {
            return
        }
    }

    return (
        <main className='category'>
            <section className='banner'>
                <h1>{category}</h1>
                <p className="body-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
            </section>

            <section className="posts-and-categories wrapper">

                <div className="selected-posts">
                    {arePostsLoaded ?

                        <div className="posts-container">
                            {
                                filteredPosts.map((post, index) => (

                                    <PostCard1 post={post} key={index} />

                                ))
                            }
                        </div> :
                        <p>loading...</p>
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
