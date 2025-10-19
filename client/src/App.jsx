import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Author from './pages/Author';
import BlogPost from './pages/BlogPost';
import Category from './pages/Category';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/author/:id" element={<Author />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* <Footer /> */}
    </>
  )
}

export default App
