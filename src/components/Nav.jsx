import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Education', url: '#education' },
  { name: 'Research', url: '#research' },
  { name: 'Experience', url: '#jobs' },
  { name: 'Currently', url: '#currently' },
  { name: 'Contact', url: '#contact' },
];

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Nav = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { threshold: 0.3 });
    sections.forEach(s => observer.observe(s));

    return () => { window.removeEventListener('scroll', handleScroll); observer.disconnect(); };
  }, []);

  const bgColor = scrolled
    ? theme === 'dark' ? 'rgba(10,25,47,0.95)' : 'rgba(248,250,252,0.95)'
    : 'transparent';

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 50px',
      height: scrolled ? '70px' : '100px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: bgColor,
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 10px 30px -10px var(--navy-shadow)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <a href="/" style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 600, textDecoration: 'none' }}>RA</a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ol style={{ display: 'flex', listStyle: 'none', gap: '8px', margin: 0, padding: 0 }}>
          {navLinks.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} style={{
                padding: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fz-xs)',
                color: activeSection === url.replace('#', '') ? 'var(--green)' : 'var(--lightest-slate)',
                transition: 'var(--transition)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--green)'}
              onMouseLeave={e => e.target.style.color = activeSection === url.replace('#', '') ? 'var(--green)' : 'var(--lightest-slate)'}
              >
                <span style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-xxs)', marginRight: '5px' }}>0{i+1}.</span>
                {name}
              </a>
            </li>
          ))}
        </ol>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="big-button magnetic-btn" style={{ marginLeft: '15px', padding: '10px 16px', fontSize: 'var(--fz-xs)' }}>
          Resume
        </a>
        <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme" style={{ marginLeft: '8px', color: 'var(--light-slate)' }}>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  );
};

export default Nav;
