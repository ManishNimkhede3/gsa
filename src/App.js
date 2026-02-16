import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. check console for details.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'en') return 'hi';
      if (prev === 'hi') return 'pa';
      if (prev === 'pa') return 'hr';
      return 'en';
    });
  };

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Props to pass to pages if needed (for language)
  const appProps = { theme, language };

  return (
    <ErrorBoundary>
      <Router>
        <div className={`App ${theme}`}>
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            language={language}
            toggleLanguage={toggleLanguage}
          />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Home {...appProps} />} />
            <Route path="/about" element={<About {...appProps} />} />
            <Route path="/services" element={<Services {...appProps} />} />
            <Route path="/contact" element={<Contact {...appProps} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer language={language} />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
