import '../../styles/Navbar.css';
import Logo from '../../assets/Logo.svg';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    return (
        <header className='nav-header'>
            <div className="wrapper">

                <a href="/" className="logo">
                    <img src={Logo} alt="this is the finsweet logo" width={140} height={28} />
                </a>


                <nav className='nav'>
                    <ul className='nav-list'>
                        <li><a href="/blog" className='nav-link'>Blog</a></li>
                        <li><a href="/about" className='nav-link'>About us</a></li>
                        <li><a href="/contact" className='nav-link'>Contact Us</a></li>
                        <a href="#" className="button white">
                            Subscribe
                        </a>
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
