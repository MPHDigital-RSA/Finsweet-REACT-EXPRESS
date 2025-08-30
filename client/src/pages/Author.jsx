import '../styles/Author.css'
import { useParams } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard1 from '../components/PostCard1';

const Author = () => {

    // grab the id from the URL
    const { id } = useParams();

    const [author, setAuthor] = useState([]);
    const [isAuthorLoaded, setisAuthorLoaded] = useState(false);

    useEffect(() => {
        try {
            axios(`http://localhost:3001/api/users/${id}`).then(author => {
                setAuthor(author.data);
                console.log(author.data);
                setisAuthorLoaded(true);
            })
        } catch (error) {
            console.log(error);
            setisAuthorLoaded(false);
        }

    }, []);

    return (
        <main className='author'>
            <section className="author-banner">
                <div className="wrapper">
                    <div className="author-image">
                        <img src={author.avatar} alt="" width={251} height={294} />
                    </div>

                    <div className="author-details">
                        <h2>
                            Hey there, I'm <span>{author.name}</span> and welcome to my Blog.
                        </h2>
                        <p className="body-1">
                            {author.userDescription}
                        </p>

                        <div className="socials">
                            <a href={author.facebook} className='social-link'><IoLogoFacebook /></a>
                            <a href={author.twitter} className='social-link'><FaTwitter /></a>
                            <a href={author.instagram} className='social-link'><FaInstagram /></a>
                            <a href={author.linkedin} className='social-link'><SiLinkedin /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='wrapper posts'>
                <h1>My Posts</h1>

                {
                    isAuthorLoaded ?
                        <div className="posts-container">
                            {
                                author.posts.map((post, index) => (
                                    <PostCard1 post={post} key={index} />
                                ))
                            }
                        </div> :

                        <p>Loading</p>
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
        </main>
    )
}

export default Author
