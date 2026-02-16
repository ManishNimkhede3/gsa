import React from 'react';
import { Link } from 'react-router-dom';
import { homeTranslations } from '../data/homeTranslations';
import './Home.css';

const Home = ({ language = 'en' }) => {
    const t = homeTranslations[language] || homeTranslations['en'];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>
                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            {t.hero.badge}
                        </div>
                        <h1 className="hero-title">
                            {t.hero.title}
                        </h1>
                        <p className="hero-description">
                            {t.hero.description}
                        </p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-value">{t.hero.activeSince}</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">{t.hero.ibnr}</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">{t.hero.team}</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">{t.hero.officers}</span>
                            </div>
                        </div>
                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary">{t.hero.ctaPrimary}</Link>
                            <a href="tel:+919814974333" className="btn btn-secondary">{t.hero.ctaSecondary}</a>
                        </div>
                        <p className="hero-location">
                            {t.hero.location}
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="section who-we-are">
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.15,
                    zIndex: 0
                }}></div>
                <div className="container">
                    <h2 className="section-title">{t.whoWeAre.title}</h2>
                    <div className="who-content">
                        <p className="lead-text" dangerouslySetInnerHTML={{ __html: t.whoWeAre.p1 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.whoWeAre.p2 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.whoWeAre.p3 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.whoWeAre.p4 }}></p>
                        <p className="highlight-text" dangerouslySetInnerHTML={{ __html: t.whoWeAre.highlight }}></p>
                    </div>
                </div>
            </section>

            {/* Core Specializations Section */}
            <section className="section specializations">
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.1,
                    zIndex: 0
                }}></div>
                <div className="container">
                    <h2 className="section-title">{t.specializations.title}</h2>
                    <p className="section-subtitle">
                        {t.specializations.subtitle}
                    </p>
                    <div className="specializations-grid">
                        <div className="spec-card">
                            <div className="spec-icon">🚗</div>
                            <h3 className="spec-title">{t.specializations.motor.title}</h3>
                            <p className="spec-description">
                                {t.specializations.motor.desc}
                            </p>
                            <ul className="spec-list">
                                <li>
                                    <strong>{t.specializations.motor.tp}</strong>
                                    <ul>
                                        {t.specializations.motor.tpList.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t.specializations.motor.od}</strong>
                                    <ul>
                                        {t.specializations.motor.odList.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t.specializations.motor.theft}</strong>
                                    <ul>
                                        {t.specializations.motor.theftList.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="spec-card">
                            <div className="spec-icon">👮</div>
                            <h3 className="spec-title">{t.specializations.police.title}</h3>
                            <p className="spec-description">
                                {t.specializations.police.desc}
                            </p>
                            <ul className="spec-list">
                                {t.specializations.police.list.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>

                        <div className="spec-card">
                            <div className="spec-icon">📋</div>
                            <h3 className="spec-title">{t.specializations.rti.title}</h3>
                            <p className="spec-description">
                                {t.specializations.rti.desc}
                            </p>
                            <ul className="spec-list">
                                {t.specializations.rti.list.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>

                        <div className="spec-card">
                            <div className="spec-icon">📊</div>
                            <h3 className="spec-title">{t.specializations.risk.title}</h3>
                            <p className="spec-description">
                                {t.specializations.risk.desc}
                            </p>
                            <ul className="spec-list">
                                {t.specializations.risk.list.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investigation Process Section */}
            <section className="section process">
                <div className="container">
                    <h2 className="section-title">{t.process.title}</h2>
                    <p className="section-subtitle">
                        {t.process.subtitle}
                    </p>
                    <div className="process-timeline">
                        {t.process.steps.map((step, index) => (
                            <div className="process-step" key={index}>
                                <div className="step-number">{index + 1}</div>
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="process-cta">
                        <p className="cta-text">{t.process.ctaText}</p>
                        <a href="tel:+919814974333" className="btn btn-primary">{t.process.ctaBtn}</a>
                    </div>
                </div>
            </section>

            {/* Coverage Section */}
            <section className="section coverage">
                <div className="container">
                    <h2 className="section-title">{t.coverage.title}</h2>
                    <p className="section-subtitle">
                        {t.coverage.subtitle}
                    </p>
                    <div className="coverage-grid">
                        <div className="coverage-card">
                            <div className="coverage-icon">🗺️</div>
                            <h3 className="coverage-title">{t.coverage.punjab.title}</h3>
                            <p className="coverage-description">
                                {t.coverage.punjab.desc}
                            </p>
                        </div>
                        <div className="coverage-card">
                            <div className="coverage-icon">🗺️</div>
                            <h3 className="coverage-title">{t.coverage.haryana.title}</h3>
                            <p className="coverage-description">
                                {t.coverage.haryana.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GSA Advantage Section */}
            <section className="section advantage">
                <div className="container">
                    <h2 className="section-title">{t.advantage.title}</h2>
                    <div className="advantage-grid">
                        {t.advantage.items.map((item, index) => (
                            <div className="advantage-item" key={index}>
                                <div className="advantage-icon">✓</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="section industries">
                <div className="container">
                    <h2 className="section-title">{t.industries.title}</h2>
                    <div className="industries-content">
                        <div className="industry-card">
                            <h3>{t.industries.cardTitle}</h3>
                            <ul>
                                {t.industries.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2 className="cta-title">{t.cta.title}</h2>
                        <p className="cta-description">
                            {t.cta.desc}
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">{t.cta.btnPrimary}</Link>
                            <a href="tel:+919814974333" className="btn btn-secondary">{t.cta.btnSecondary}</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
