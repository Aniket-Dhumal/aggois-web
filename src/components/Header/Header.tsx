import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import colorAgribid from '../../assets/images/new_color_logo_agribid.png';
// import colorAggois from '../../assets/images/aggois_color_logo-removebg-preview.png';
import logo from '../../assets/images/AggoisLogoOG.png'

import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      if (window.innerWidth > 640) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const redirectHome = () => {
    navigate('/');
    scrollToTop();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const handleLinkClick = () => {
    closeMenu();
    scrollToTop();
  };

  const handleMouseEnter = (name: string) => {
    if (!isMobile) {
      setActiveDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (name: string) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className={`container-fluid header-container ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="header">
        <div className="header-logo" onClick={redirectHome}>
          <Image src={logo} className="header-logo-img" fluid />
        </div>

        <div className="header-links-wrapper">
          <div className={`header-links ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-item" onClick={handleLinkClick}>
              <Link to="/" className="nav-link" onClick={handleLinkClick}>HOME</Link>
            </div>

            <div
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("ABOUT")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleDropdownClick("ABOUT")}
            >
              <div className="nav-link">
                <Link className="nav-link" to="/about-us" onClick={handleLinkClick}>ABOUT</Link>
              </div>
            </div>

            <div className="nav-item" onClick={handleLinkClick}>
              <Link to="/product" className="nav-link" onClick={handleLinkClick}>PRODUCTS</Link>
            </div>

            <div className="nav-item" onClick={handleLinkClick}>
              <Link to="/contact-us" className="nav-link" onClick={handleLinkClick}>CONTACT US</Link>
            </div>

            <div className="nav-item" onClick={handleLinkClick}>
              <Link to="/privacy-policy" className="nav-link" onClick={handleLinkClick}>PRIVACY POLICY</Link>
            </div>
          </div>
        </div>

        <button 
          className={`menu-toggle ${isMobile ? 'visible' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;