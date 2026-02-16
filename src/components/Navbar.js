import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme, language, toggleLanguage }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const translations = {
        en: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            contact: 'Contact',
            call: 'Call Now',
            logoMain: 'Gagandeep Singh',
            logoSub: '& Associates'
        },
        hi: {
            home: 'मुखपृष्ठ',
            about: 'हमारे बारे में',
            services: 'सेवाएं',
            contact: 'संपर्क करें',
            call: 'कॉल करें',
            logoMain: 'गगनदीप सिंह',
            logoSub: '& एसोसिएट्स'
        },
        pa: {
            home: 'ਮੁੱਖ ਪੰਨਾ',
            about: 'ਸਾਡੇ ਬਾਰੇ',
            services: 'ਸੇਵਾਵਾਂ',
            contact: 'ਸੰਪਰਕ ਕਰੋ',
            call: 'ਕਾਲ ਕਰੋ',
            logoMain: 'ਗਗਨਦੀਪ ਸਿੰਘ',
            logoSub: '& ਐਸੋਸੀਏਟਸ'
        },
        hr: {
            home: 'होम',
            about: 'म्हारे बारे में',
            services: 'सेवाएं',
            contact: 'बिल्ला',
            call: 'फोन्न कर',
            logoMain: 'गगनदीप सिंह',
            logoSub: '& एसोसिएट्स'
        }
    };

    const t = translations[language] || translations.en;

    const navLinks = [
        { name: t.home, path: '/' },
        { name: t.about, path: '/about' },
        { name: t.services, path: '/services' },
        { name: t.contact, path: '/contact' }
    ];

    const getLangLabel = (lang) => {
        if (lang === 'en') return 'EN';
        if (lang === 'hi') return 'HI';
        if (lang === 'pa') return 'PA';
        if (lang === 'hr') return 'HR';
        return 'EN';
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${theme}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">GSA</div>
                    <div className="logo-text">
                        <span className="logo-main">{t.logoMain}</span>
                        <span className="logo-sub">{t.logoSub}</span>
                    </div>
                </Link>

                <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="nav-controls">
                        <button onClick={toggleTheme} className="control-btn theme-btn" aria-label="Toggle Theme">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                        <button onClick={toggleLanguage} className="control-btn lang-btn" aria-label="Toggle Language">
                            {getLangLabel(language)}
                        </button>
                    </div>

                    <a href="tel:+919814974333" className="btn btn-primary nav-cta">
                        {t.call}
                    </a>
                </div>

                <button
                    className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
