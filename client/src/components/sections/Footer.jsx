import Logo from '../../assets/Logo.svg';
import '../../styles/Footer.css';

import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";


const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="nav">
                    <a href="/" className="logo">
                        <img src={Logo} alt="this is the finsweet logo" width={140} height={28} />
                    </a>


                    <nav className='nav'>
                        <ul className='nav-list'>
                            <li><a href="/blog" className='nav-link'>Blog</a></li>
                            <li><a href="/about" className='nav-link'>About us</a></li>
                            <li><a href="/contact" className='nav-link'>Contact Us</a></li>
                            <li><a href="/privacy" className='nav-link'>Privacy Policy</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="subscribe">
                    <h2>
                        Subscribe to our news letter to get latest updates and news
                    </h2>

                    <form action="">
                        <input type="text" placeholder='Enter Your Email' name='email' className='form-input' />
                        <button className='button yellow'>
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="copyright">
                    <div className="contact-info">
                        <p className='body-1'>Finstreet 118 2561 Fintown</p>
                        <p className='body-1'>Hello@finsweet.com  020 7993 2905</p>
                    </div>

                    <div className="socials">
                        <a href="#" className='social-link'><IoLogoFacebook /></a>
                        <a href="#" className='social-link'><FaTwitter /></a>
                        <a href="#" className='social-link'><FaInstagram /></a>
                        <a href="#" className='social-link'><SiLinkedin /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
