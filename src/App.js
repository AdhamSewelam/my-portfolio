import React, { useEffect, useState } from 'react';

import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Qualification from './components/qualification/Qualification';
import ScrollUp from './components/scrollup/ScrollUp';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer theme={theme} />
      <ScrollUp />
    </>
  );
}

export default App;
