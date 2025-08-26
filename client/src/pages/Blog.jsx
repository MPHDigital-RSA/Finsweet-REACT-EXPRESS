import '../styles/Blog.css';
import BannerImage from '../assets/blog-hero-image.png'
import { useEffect, useState } from 'react';
import Cta from '../components/Cta';


const data = [
    {
        "name": "Floyd Miles",
        "position": "Content writer",
        "avatar": "https://images.unsplash.com/photo-1725866546799-4cc16f6cba23?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "company": "Meta",
        "facebook": "/meta",
        "twitter": "#",
        "instagram": "#",
        "linkedin": "#",
        "posts":
            [
                {
                    "postId": 1,
                    "category": "business",
                    "title": "Design tips for designers that cover everything you need",
                    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
                    "thumbnail": "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "createdAt": "23 May 2025"
                }
            ]
    },
    {
        "name": "Dianne Russel",
        "position": "Software Developer",
        "avatar": "https://images.unsplash.com/photo-1656338997878-279d71d48f6e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "company": "Google",
        "facebook": "#",
        "twitter": "#",
        "instagram": "#",
        "linkedin": "#",
        "posts":
            [
                {
                    "postId": 2,
                    "category": "business",
                    "title": "Design tips for designers that cover everything you need",
                    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
                    "thumbnail": "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "createdAt": "23 May 2025"
                }
            ]
    },
    {
        "userId": 1,
        "name": "Dianne Russel",
        "position": "Content writer",
        "avatar": "https://plus.unsplash.com/premium_photo-1705009607254-5618bb0d0c35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "company": "Meta",
        "facebook": "#",
        "twitter": "#",
        "instagram": "#",
        "linkedin": "#",
        "posts":
            [
                {
                    "postId": 3,
                    "category": "business",
                    "title": "Design tips for designers that cover everything you need",
                    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
                    "thumbnail": "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "createdAt": "23 May 2025"
                }
            ]

    },
    {
        "name": "Leslie Alexander",
        "position": "Content writer",
        "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "company": "Meta",
        "facebook": "#",
        "twitter": "#",
        "instagram": "#",
        "linkedin": "#",
        "posts":
            [
                {
                    "postId": 5,
                    "category": "startup",
                    "title": "Design tips for designers that cover everything you need",
                    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
                    "thumbnail": "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "createdAt": "23 May 2025"
                }
            ]
    }
];

const Blog = () => {

    // const [allPosts, setAllPosts] = useState([]);
    // const [postsLoaded, setPostsLoaded] = useState(false);
    let userIndex = 3;
    let post = data[userIndex].posts[0];
    console.log(post)

    // useEffect(() => {
    //     fetch('../data/authors.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err))
    // }, [])

    return (
        <div className='blog'>
            <div className="banner">
                <div className="wrapper">
                    {
                        post && (
                            <div className="banner-text">
                                <div className="cap-1">Featured Post</div>
                                <h2>{post.title}</h2>
                                <p className='body-1'>By <a href="#" className='body-1 author-link'> {data[userIndex].name} </a>| {post.createdAt}</p>
                                <p className="body-1">
                                    {post.description}
                                </p>
                                <a href="#" className='button yellow'>Read More ‣</a>
                            </div>
                        )
                    }
                    <div className="banner-image"><img src={post.thumbnail} alt="" width={515} height={359} /></div>
                </div>
            </div>

            <div className='wrapper posts'>
                <h1>All posts</h1>

                <div className="posts-container">
                    <div className="post">
                        <div className="post-image">
                            <img src={BannerImage} alt="" width={390} />
                        </div>

                        <div className="post-info">
                            <div className="cap-1">Startup</div>
                            <h2>Design tips for designers that cover everything you need</h2>
                            <p className="body-1">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-image">
                            <img src={BannerImage} alt="" width={390} />
                        </div>

                        <div className="post-info">
                            <div className="cap-1">Startup</div>
                            <h2>Design tips for designers that cover everything you need</h2>
                            <p className="body-1">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="posts-nav">
                    <a href="#" className="link">
                        ‹ Prev
                    </a>
                    <a href="#" className="link">
                        Next ›
                    </a>
                </div>
            </div>

            <div className="cta-container">
                <Cta />
            </div>

        </div>
    )
}

export default Blog
