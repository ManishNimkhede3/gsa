import React from 'react';
import { Link } from 'react-router-dom';
import { footerTranslations } from '../data/footerTranslations';
import './Footer.css';

const Footer = ({ language = 'en' }) => {
    const currentYear = new Date().getFullYear();
    const t = footerTranslations[language] || footerTranslations['en'];

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <div className="footer-logo">
                                <div className="logo-icon">GSA</div>
                                <div className="logo-text">
                                    <span className="logo-main">{language === 'en' ? 'Gagandeep Singh' : (language === 'hi' ? 'गगनदीप सिंह' : 'ਗਗਨਦੀਪ ਸਿੰਘ')}</span>
                                    <span className="logo-sub">{language === 'en' ? '& Associates' : (language === 'hi' ? '& एसोसिएट्स' : '& ਐਸੋਸੀਏਟਸ')}</span>
                                </div>
                            </div>
                            <p className="footer-tagline">
                                {t.tagline}
                            </p>
                            <div className="footer-badges">
                                <div className="badge">{t.activeSince}</div>
                                <div className="badge">{t.ibnr}</div>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">{t.quickLinks}</h4>
                            <ul className="footer-links">
                                <li><Link to="/">{t.links.home}</Link></li>
                                <li><Link to="/about">{t.links.about}</Link></li>
                                <li><Link to="/services">{t.links.services}</Link></li>
                                <li><Link to="/contact">{t.links.contact}</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">{t.ourServices}</h4>
                            <ul className="footer-links">
                                <li><Link to="/services">{t.services.motor}</Link></li>
                                <li><Link to="/services">{t.services.police}</Link></li>
                                <li><Link to="/services">{t.services.rti}</Link></li>
                                <li><Link to="/services">{t.services.ibnr}</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">{t.contactInfo}</h4>
                            <div className="footer-contact">
                                <div className="contact-item">
                                    <span className="contact-icon">📍</span>
                                    <div>
                                        <p>{t.address.line1}</p>
                                        <p>{t.address.line2}</p>
                                        <p>{t.address.line3}</p>
                                        <p>{t.address.line4}</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">📞</span>
                                    <a href="tel:+919814974333">+91-9814974333</a>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">✉️</span>
                                    <a href="mailto:associatesgagandeep.singh@gmail.com">
                                        associatesgagandeep.singh@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-divider"></div>
                        <div className="footer-bottom-content">
                            <p>&copy; {currentYear} {t.rights}</p>
                            <p className="footer-coverage">
                                <span className="gradient-text">{t.coverage}</span> {t.region}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
