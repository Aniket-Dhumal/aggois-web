import { FaRegCopyright } from "react-icons/fa";
import { Image, Toast, ToastContainer } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import colorAgribid from '../../assets/images/new_color_logo_agribid.png';
import logo from '../../assets/images/aggois_color_logo.PNG'
import * as yup from 'yup';
import { useState } from 'react';
import './Footer.css'

// Validation schema for email
const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear error when user types
    if (error) setError('');
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate the email
      await emailSchema.validate({ email }, { abortEarly: false });
      
      // If validation passes, clear error
      setError('');

      // Here you would typically send the data to your backend
      const apiPath = `${import.meta.env.VITE_API_PATH}/subscribe`;
      
      const response = await fetch(apiPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Show success toast
      setToastMessage('You have subscribed successfully!');
      setShowToast(true);
      
      // Reset email field
      setEmail('');

    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.errors[0]);
      } else {
        // Show error toast
        setToastMessage('Failed to subscribe. Please try again later.');
        setShowToast(true);
        console.error('Error submitting form:', err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='container-fluid' id="footer">
      <div className="footer-grid">
        {/* Column 1 - Logo and Social */}
        <div className="footer-col footer-col-1">
          <div className="footer-logo">
            <Image src={logo} className="footer-logo-img" />
          </div>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/company/aggois/" target='_blank' rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/AggoisFin" target='_blank' rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/aggoisfin" target='_blank' rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Column 2 - Navigation Links */}
        <div className="footer-col footer-col-2">
          <h4>Quick Links</h4>
          <Link to="/about-us" className="footer-link" onClick={scrollToTop}>About</Link>
          <Link to="/product" className="footer-link" onClick={scrollToTop}>Products</Link>
          <Link to="/contact-us" className="footer-link" onClick={scrollToTop}>Contact Us</Link>
          <Link to="/privacy-policy" className="footer-link" onClick={scrollToTop}>Privacy Policy</Link>
        </div>

        {/* Column 3 - Subscribe */}
        <div className="footer-col footer-col-3">
          <h4>Subscribe</h4>
          <p>Get the latest updates</p>
          <form className="footer-subscribe" onSubmit={handleSubscribe}>
            <input 
              type='email' 
              name="email"  
              placeholder='Enter your email' 
              className={`footer-input ${error ? 'is-invalid' : ''}`}
              value={email}
              onChange={handleEmailChange}
            />
            {error && <div className="error-message">{error}</div>}
            <button 
              className='footer-subscribe-btn' 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </button>
          </form>
        </div>

        {/* Column 4 - Contact Info */}
        <div className="footer-col footer-col-4">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <span>Gmail:</span>
              <span>support@aggois.com</span>
            </div>
            <div className="contact-item">
              <span>Linkedin:</span>
              <span>AggoinFin</span>
            </div>
            <div className="contact-item">
              <span>Whatsapp:</span>
              <span>+91 9739938383</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          <FaRegCopyright />
          <span>2018 AGGOIS ALL RIGHTS RESERVED.</span>
        </div>
        <div className="footer-powered">
          POWERED BY <span><Image className='footer-agribid-logo-img' src={colorAgribid} fluid/></span>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="bottom-center" className="p-3">
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={5000} 
          autohide
          bg={toastMessage.includes('success') ? 'success' : 'danger'}
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )
}

export default Footer