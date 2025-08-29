import '../styles/AuthorCard.css';
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { Link } from 'react-router-dom';

const AuthorCard = ({ author }) => {
    return (
        <div className="author-card">
            <Link to={`/author/${author._id}`} className="image">
                <img src={author.avatar} alt="" className='avatar' />
            </Link>

            <div className="text-info">
                <h3>{author.name}</h3>
                <p className="body-2">
                    {author.position} @ {author.company}
                </p>
                <div className="socials">
                    <a href={author.facebook} className='social-link'><IoLogoFacebook /></a>
                    <a href={author.twitter} className='social-link'><FaTwitter /></a>
                    <a href={author.instagram} className='social-link'><FaInstagram /></a>
                    <a href={author.linkedin} className='social-link'><SiLinkedin /></a>
                </div>
            </div>

        </div>
    )
}

export default AuthorCard
