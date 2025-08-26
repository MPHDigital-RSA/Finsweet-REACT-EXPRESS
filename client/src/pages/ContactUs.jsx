import '../styles/ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact wrapper'>
            <div className="text">
                <div className="cap-1 body-1">
                    Contact us
                </div>
                <h1>Let’s Start a Conversation</h1>
                <p className="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>

            <div className="hours-and-details">
                <div className="working-hours">
                    <p className="title body-2">Working hours</p>
                    <div className="info">
                        <h5>Monday to Friday 9:00 AM to 8:00 PM</h5>
                        <p className="light body-1">Our Support Team is available 24/7</p>
                    </div>
                </div>
                <div className="contact-us">
                    <p className="title body-2">Contact Us</p>
                    <div className="info">
                        <h5>079 560 2459</h5>
                        <p className="light body-1">hello@finsweet.com</p>
                    </div>
                </div>
            </div>

            <form action="">
                <input type="text" placeholder='Full Name' className='input' />
                <input type="email" placeholder='Your Email' className='input' />
                <select name="querry" className='input'>
                    <option value="volvo">Querry Related</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <textarea name="message" placeholder='Message' className='input'></textarea>
                <button className="button yellow">Send Message</button>
            </form>
        </div >
    )
}

export default ContactUs
