import '../styles/AboutUs.css';
import image1 from '../assets/about-image-1.png';
import image2 from '../assets/about-image-2.png';
import yelloShape from '../assets/yellow-shape.svg';
import purpleShape from '../assets/purple-circle.svg';
import AuthorCard from '../components/AuthorCard';
import Cta from '../components/Cta';
import { useState } from 'react';

const authors = [
    {
        name: "Floyd Miles",
        position: "Content writer",
        avatar: "https://images.unsplash.com/photo-1725866546799-4cc16f6cba23?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        company: "Meta",
        facebook: "/meta",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
    },
    {
        name: "Dianne Russel",
        position: "Software Developer",
        avatar: "https://images.unsplash.com/photo-1656338997878-279d71d48f6e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        company: "Google",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
    },
    {
        name: "Dianne Russel",
        position: "Content writer",
        avatar: "https://plus.unsplash.com/premium_photo-1705009607254-5618bb0d0c35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        company: "Meta",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
    },
    {
        name: "Leslie Alexander",
        position: "Content writer",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        company: "Meta",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
    },
]

const AboutUs = () => {

    // const [areAuthorsLoaded, setAreAuthorsLoaded] = useState(false);

    return (
        <div className="about wrapper">
            <div className="inner-wrapper">
                <div className="grid offset">
                    <div className="heading">
                        <div className="cap-1 body-1">about us</div>
                        <h1>We are a team of content writers who share their learnings</h1>
                    </div>

                    <div className="body-text">
                        <p className="body-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>

            <div className="banner">
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
            </div>

            <div className="mission-and-vision">
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
            </div>

            <div className="teams flex">
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
            </div>

            <div className="why flex">
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
            </div>

            <div className="authors wrapper">
                <h2>List of Authors</h2>

                <div className="authors-flex">
                    {

                        authors.map((author, index) => (
                            <AuthorCard author={author} key={index} />
                        ))

                    }
                </div>
            </div>

            <div className="cta-container">
                <Cta />
            </div>

        </div>
    )
}

export default AboutUs
