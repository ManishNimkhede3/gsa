import React from 'react';
import { aboutTranslations } from '../data/aboutTranslations';
import './About.css';

const About = ({ language = 'en' }) => {
    const t = aboutTranslations[language] || aboutTranslations['en'];

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1 className="page-title">{t.pageTitle}</h1>
                    <p className="page-subtitle">
                        {t.pageSubtitle}
                    </p>
                </div>
            </section>

            <section className="section about-content">
                <div className="container">
                    <div className="content-box">
                        <p className="lead-text" dangerouslySetInnerHTML={{ __html: t.leadText }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.description }}></p>
                    </div>

                    <div className="evolution-section">
                        <h2 className="section-title">{t.evolution.title}</h2>
                        <div className="timeline-grid">
                            {t.evolution.items.map((item, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-year">{item.year}</div>
                                    <div className="timeline-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="strength-section">
                        <h2 className="section-title">{t.strength.title}</h2>
                        <div className="strength-grid">
                            {t.strength.cards.map((card, index) => (
                                <div className="strength-card" key={index}>
                                    <div className="strength-icon">{index === 0 ? '👥' : index === 1 ? '🔍' : '🏢'}</div>
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="values-section">
                        <h2 className="section-title">{t.values.title}</h2>
                        <div className="values-list">
                            {t.values.items.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="value-item">
                                        <span className="value-icon">{['⚖️', '🤝', '📋', '🔒', '👮'][index]}</span>
                                        <span className="value-text">{item}</span>
                                    </div>
                                    {index < t.values.items.length - 1 && <div className="value-divider">•</div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="leader-section">
                        <div className="leader-card">
                            <div className="leader-info">
                                <h2>{t.leader.name}</h2>
                                <p className="leader-title">{t.leader.title}</p>
                                <p className="leader-company">{t.leader.company}</p>
                                <div className="leader-contact">
                                    <p>📧 associatesgagandeep.singh@gmail.com</p>
                                    <p>📞 +91-9814974333</p>
                                </div>
                                <p className="leader-quote">
                                    {t.leader.quote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
