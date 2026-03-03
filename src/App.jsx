import React, { useEffect, useState, useRef } from 'react';
import Nav from './components/Nav.jsx';
import Social from './components/Social.jsx';
import Email from './components/Email.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Education from './components/sections/Education.jsx';
import Research from './components/sections/Research.jsx';
import Jobs from './components/sections/Jobs.jsx';
import Currently from './components/sections/Currently.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('dark');
  const spotlightRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  useEffect(() => {
    const loader = document.getElementById('loader');
    setTimeout(() => { if (loader) loader.classList.add('hidden'); }, 1800);

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }, 100);

    const spotlight = spotlightRef.current;
    const handleMouseMove = (e) => {
      if (spotlight) {
        spotlight.style.left = e.clientX + 'px';
        spotlight.style.top = e.clientY + 'px';
        spotlight.style.opacity = '1';
      }
    };
    const handleMouseLeave = () => { if (spotlight) spotlight.style.opacity = '0'; };
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll('.magnetic-btn');
    const handlers = [];
    btns.forEach(btn => {
      const move = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      };
      const leave = () => { btn.style.transform = ''; };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      handlers.push({ btn, move, leave });
    });
    return () => handlers.forEach(({ btn, move, leave }) => {
      btn.removeEventListener('mousemove', move);
      btn.removeEventListener('mouseleave', leave);
    });
  }, [theme]);

  return (
    <div id="root">
      <div id="loader">
        <div className="loader-logo">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="96" height="96" rx="8" stroke="var(--green)" strokeWidth="2"/>
            <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
              fontFamily="SF Mono, Fira Code, monospace" fontSize="42" fontWeight="600" fill="var(--green)">
              RA
            </text>
          </svg>
        </div>
      </div>

      <div
        ref={spotlightRef}
        style={{
          position: 'fixed', pointerEvents: 'none', zIndex: 9999,
          width: '500px', height: '500px', borderRadius: '50%',
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(100,255,218,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(95,123,148,0.1) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          opacity: 0, transition: 'opacity 0.3s ease',
        }}
      />

      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Social />
      <Email />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Jobs />
        <Currently />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
