import '../../styles/Navbar.css';
import Logo from '../../assets/Logo.svg';
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='nav-header'>
            <div className="wrapper">

                <Link to="/" className="logo">
                    <img src={Logo} alt="this is the finsweet logo" width={140} height={28} />
                </Link>


                <nav className='nav'>
                    <ul className='nav-list'>
                        <li><Link to="/blog" className='nav-link'>Blog</Link></li>
                        <li><Link to="/about" className='nav-link'>About us</Link></li>
                        <li><Link to="/contact" className='nav-link'>Contact Us</Link></li>
                        <Link to="#" className="button white">
                            Subscribe
                        </Link>
                    </ul>
                </nav>

                <button className='hamburger'>
                    <FaBars />
                </button>


            </div>
        </header>
    )
}

export default Navbar
