import React, { useState } from 'react';
import { contactTranslations } from '../data/contactTranslations';
import './Contact.css';

const Contact = ({ language = 'en' }) => {
    const t = contactTranslations[language] || contactTranslations['en'];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert(t.alert);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.2,
                    zIndex: 0
                }}></div>
                <div className="container">
                    <h1 className="page-title">{t.pageTitle}</h1>
                    <p className="page-subtitle">
                        {t.pageSubtitle}
                    </p>
                </div>
            </section>

            <section className="section contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2 className="info-title">{t.infoTitle}</h2>
                            <p className="info-subtitle">Gagandeep Singh & Associates</p>

                            <div className="info-section">
                                <h3 className="info-heading">{t.headings.pi}</h3>
                                <p className="info-text">Gagandeep Singh</p>
                            </div>

                            <div className="info-section">
                                <h3 className="info-heading">{t.headings.address}</h3>
                                <p className="info-text">
                                    {t.address.line1}<br />
                                    {t.address.line2}<br />
                                    {t.address.line3}<br />
                                    {t.address.line4}
                                </p>
                            </div>

                            <div className="info-section">
                                <h3 className="info-heading">{t.headings.mobile}</h3>
                                <a href="tel:+919814974333" className="info-link">+91-9814974333</a>
                            </div>

                            <div className="info-section">
                                <h3 className="info-heading">{t.headings.email}</h3>
                                <a href="mailto:associatesgagandeep.singh@gmail.com" className="info-link">
                                    associatesgagandeep.singh@gmail.com
                                </a>
                            </div>

                            <div className="info-quote">
                                <p>{t.quote}</p>
                            </div>

                            <div className="info-badges">
                                {t.badges.map((badge, index) => (
                                    <div className="badge" key={index}>{badge}</div>
                                ))}
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h2 className="form-title">{t.formTitle}</h2>
                            <p className="form-subtitle">{t.formSubtitle}</p>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">{t.formLabels.name}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder={t.placeholders.name}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">{t.formLabels.email}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder={t.placeholders.email}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">{t.formLabels.phone}</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder={t.placeholders.phone}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">{t.formLabels.company}</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder={t.placeholders.company}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">{t.formLabels.message}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder={t.placeholders.message}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">
                                    {t.formLabels.submit}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
