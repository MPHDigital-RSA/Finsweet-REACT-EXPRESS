import '../../styles/Navbar.css';
import Logo from '../../assets/Logo.svg';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const handlClick = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <header className='nav-header'>
            <div className="wrapper">

                <Link to="/" className="logo" onClick={isNavOpen && handlClick}>
                    <img src={Logo} alt="this is the finsweet logo" width={140} height={28} />
                </Link>

                <nav className={isNavOpen ? "mobile-nav" : "nav"}>
                    <ul className='nav-list'>
                        <li><Link to={"/blog"} className='nav-link' onClick={isNavOpen && handlClick}>Blog</Link></li>
                        <li><Link to="/about" className='nav-link' onClick={isNavOpen && handlClick}>About us</Link></li>
                        <li><Link to="/contact" className='nav-link' onClick={isNavOpen && handlClick}>Contact Us</Link></li>
                        <Link to="#" className="button white" onClick={isNavOpen && handlClick}>
                            Subscribe
                        </Link>
                    </ul>
                </nav>

                <button className='hamburger' onClick={handlClick}>
                    {isNavOpen ? <IoClose /> : <FaBars />}
                </button>

            </div>
        </header>
    )
}

export default Navbar
