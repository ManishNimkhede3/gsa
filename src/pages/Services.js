import React from 'react';
import { servicesTranslations } from '../data/servicesTranslations';
import './Services.css';

const Services = ({ language = 'en' }) => {
    const t = servicesTranslations[language] || servicesTranslations['en'];

    return (
        <div className="services-page">
            <section className="services-hero">
                <div className="container">
                    <h1 className="page-title">{t.pageTitle}</h1>
                    <p className="page-subtitle">
                        {t.pageSubtitle}
                    </p>
                    <p className="page-description">
                        {t.heroDesc}
                    </p>
                </div>
            </section>

            <section className="section services-content">
                <div className="container">
                    <div className="services-grid">
                        {/* Motor Insurance Investigations */}
                        <div className="service-card" id="motor">
                            <div className="service-header">
                                <div className="service-icon">🚗</div>
                                <h2 className="service-title">{t.motor.title}</h2>
                                <p className="service-tagline">{t.motor.subtitle}</p>
                            </div>
                            <div className="service-body">
                                <p className="service-intro">
                                    {t.motor.intro}
                                </p>

                                <div className="service-category">
                                    <h3>{t.motor.tp.title}</h3>
                                    <ul>
                                        {t.motor.tp.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-category">
                                    <h3>{t.motor.od.title}</h3>
                                    <ul>
                                        {t.motor.od.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-category">
                                    <h3>{t.motor.theft.title}</h3>
                                    <ul>
                                        {t.motor.theft.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Police Liaison */}
                        <div className="service-card" id="police">
                            <div className="service-header">
                                <div className="service-icon">👮</div>
                                <h2 className="service-title">{t.police.title}</h2>
                                <p className="service-tagline">{t.police.subtitle}</p>
                            </div>
                            <div className="service-body">
                                <p className="service-intro">
                                    {t.police.intro}
                                </p>

                                <div className="service-category">
                                    <h3>{t.police.catTitle}</h3>
                                    <ul>
                                        {t.police.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* RTI Services */}
                        <div className="service-card" id="rti">
                            <div className="service-header">
                                <div className="service-icon">📋</div>
                                <h2 className="service-title">{t.rti.title}</h2>
                                <p className="service-tagline">{t.rti.subtitle}</p>
                            </div>
                            <div className="service-body">
                                <p className="service-intro">
                                    {t.rti.intro}
                                </p>

                                <div className="service-category">
                                    <h3>{t.rti.catTitle}</h3>
                                    <ul>
                                        {t.rti.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* IBNR & FFRM */}
                        <div className="service-card" id="ibnr">
                            <div className="service-header">
                                <div className="service-icon">📊</div>
                                <h2 className="service-title">{t.ibnr.title}</h2>
                                <p className="service-tagline">{t.ibnr.subtitle}</p>
                            </div>
                            <div className="service-body">
                                <p className="service-intro">
                                    {t.ibnr.intro}
                                </p>

                                <div className="service-category">
                                    <h3>{t.ibnr.catTitle}</h3>
                                    <ul>
                                        {t.ibnr.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-cta">
                        <div className="cta-box">
                            <h2>{t.cta.title}</h2>
                            <p>{t.cta.desc}</p>
                            <div className="cta-buttons">
                                <a href="/contact" className="btn btn-primary">{t.cta.btnPrimary}</a>
                                <a href="tel:+919814974333" className="btn btn-secondary">{t.cta.btnSecondary}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
