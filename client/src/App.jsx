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

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/contact" exact element={<ContactUs />} />
        <Route path="/privacy" exact element={<PrivacyPolicy />} />
        <Route path="/privacy" exact element={<PrivacyPolicy />} />
        <Route path="/author/:id" exact element={<Author />} />
        <Route path="/post/:id" exact element={<BlogPost />} />
        <Route path="/category" exact element={<Category />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
