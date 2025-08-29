import '../styles/AboutUs.css';
import image1 from '../assets/about-image-1.png';
import image2 from '../assets/about-image-2.png';
import yelloShape from '../assets/yellow-shape.svg';
import purpleShape from '../assets/purple-circle.svg';
import AuthorCard from '../components/AuthorCard';
import Cta from '../components/Cta';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AboutUs = () => {

    const [authors, setAuthors] = useState([]);
    const [areAuthorsLoaded, setAreAuthorsLoaded] = useState(false);

    useEffect(() => {
        try {
            axios("http://localhost:3001/api/users").then(authors => {
                setAuthors(authors.data);
                setAreAuthorsLoaded(true);
            })
        } catch (error) {
            console.log(error);
            setAreAuthorsLoaded(false);
        }

    }, []);

    // console.log(authors)

    return (
        <div className="about wrapper">
            <div className="inner-wrapper">
                <section className="grid offset">
                    <div className="heading">
                        <div className="cap-1 body-1">about us</div>
                        <h1>We are a team of content writers who share their learnings</h1>
                    </div>

                    <div className="body-text">
                        <p className="body-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </section>
            </div>

            <section className="banner">
                <div className="inner-wrapper">
                    <div className="grid">
                        <div className="stats">
                            <div className="stat">
                                <p className="amount">12+</p>
                                <p className="detail body-1">Blogs Published</p>
                            </div>
                            <div className="stat">
                                <p className="amount">18K+</p>
                                <p className="detail body-1">Views on Finsweet</p>
                            </div>
                            <div className="stat">
                                <p className="amount">30K+</p>
                                <p className="detail body-1">Total Active Users</p>
                            </div>
                        </div>
                        <div className="placeholder"></div>
                    </div>
                </div>
            </section>

            <section className="mission-and-vision">
                <div className="inner-wrapper grid">
                    <div className="mission">
                        <div className="cap-1 body-1">our mission</div>
                        <h3>Creating valuable content for creatives all around the world</h3>
                        <p className="body-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>
                    </div>
                    <div className="vision">
                        <div className="cap-1 body-1">our mission</div>
                        <h3>A platform that empowers individuals to improve</h3>
                        <p className="body-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>
                    </div>
                </div>
            </section>

            <section className="teams flex">
                <div className="text">
                    <h2>Our team of creatives</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <p className="body-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                    </p>
                </div>

                <div className="image">
                    <img src={image1} alt="hands image" width={500} className='big-image' />
                    <img src={yelloShape} alt="yellow shape image" width={103} height={116} className='deco-image yellow-shape' />
                </div>
            </section>

            <section className="why flex">
                <div className="text">
                    <h2>Why we started this Blog</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <p className="body-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                    </p>
                </div>

                <div className="image">
                    <img src={image2} alt="people playing in the stair case" width={500} className='big-image' />
                    <img src={purpleShape} alt="purple cirlce" width={74} height={74} className='deco-image purple-circle' />
                </div>
            </section>

            <section className="authors wrapper">
                <h2>List of Authors</h2>

                {
                    areAuthorsLoaded ?
                        <div className="authors-flex">
                            {
                                authors.map((author, index) => (
                                    <AuthorCard author={author} key={index} />
                                ))

                            }
                        </div> :

                        <p>Loading</p>
                }
            </section>

            <section className="cta-container">
                <Cta />
            </section>

        </div>
    )
}

export default AboutUs
