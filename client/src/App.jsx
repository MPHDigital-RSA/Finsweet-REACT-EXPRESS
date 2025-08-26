import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'

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
      </Routes>

      <Footer />
    </>
  )
}

export default App
