
import React from 'react';

const ContactUs = () => {
   

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Contact Us</h1>
            <p style={paragraphStyle}>We're Here to Help!</p>
            <p style={paragraphStyle}>If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. Our support team is available to assist you with all your inquiries.</p>

            <div style={sectionStyle}>
                <h2 style={subheadingStyle}>Customer Support:</h2>
                <p style={paragraphStyle}><strong>Email:</strong> <a href="mailto:support@movieticketsystem.com" style={linkStyle}>support@movieticketsystem.com</a></p>
                <p style={paragraphStyle}><strong>Phone:</strong> +1 (800) 123-4567</p>
                <p style={paragraphStyle}><strong>Working Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM (EST)</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subheadingStyle}>Visit Us:</h2>
                <p style={paragraphStyle}>Movie Ticket Booking System Headquarters</p>
                <p style={paragraphStyle}>123 Cinema Lane, Suite 400</p>
                <p style={paragraphStyle}>Movietown, MT 12345</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subheadingStyle}>Social Media:</h2>
                <p style={paragraphStyle}>Stay connected with us through our social media channels for the latest updates, promotions, and movie news!</p>
                <p style={paragraphStyle}><strong>Facebook:</strong> <a href="https://facebook.com/movieticketsystem" target="_blank" rel="noopener noreferrer" style={linkStyle}>@movieticketsystem</a></p>
                <p style={paragraphStyle}><strong>Twitter:</strong> <a href="https://twitter.com/movietix" target="_blank" rel="noopener noreferrer" style={linkStyle}>@movietix</a></p>
                <p style={paragraphStyle}><strong>Instagram:</strong> <a href="https://instagram.com/movieticketsystem" target="_blank" rel="noopener noreferrer" style={linkStyle}>@movieticketsystem</a></p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subheadingStyle}>Feedback:</h2>
                <p style={paragraphStyle}>We value your feedback! Let us know how we can improve your experience. Please fill out our <a href="#feedback-form" style={linkStyle}>feedback form</a> and share your thoughts.</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subheadingStyle}>FAQs:</h2>
                <p style={paragraphStyle}>Have a question? Check out our <a href="#faq-section" style={linkStyle}>FAQ section</a> for quick answers to common inquiries.</p>
            </div>
        </div>
    );
};

export default ContactUs;
