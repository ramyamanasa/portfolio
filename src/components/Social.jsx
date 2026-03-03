import React, { useState, useEffect } from 'react';

const Social = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setTimeout(() => setIsMounted(true), 1000); }, []);

  const iconStyle = {
    color: 'var(--light-slate)',
    transition: 'var(--transition)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const handleEnter = (e) => {
    e.currentTarget.style.color = 'var(--green)';
    e.currentTarget.style.transform = 'translateY(-3px)';
  };
  const handleLeave = (e) => {
    e.currentTarget.style.color = 'var(--light-slate)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <div style={{
      width: '40px', position: 'fixed', bottom: 0, left: '40px', zIndex: 10,
      opacity: isMounted ? 1 : 0, transition: 'opacity 0.5s ease',
    }}>
      <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', listStyle: 'none', padding: 0 }}>
        <li>
          <a href="https://github.com/ramyamanasa" target="_blank" rel="noreferrer"
            style={iconStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ramya-amancherla/" target="_blank" rel="noreferrer"
            style={iconStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </li>
      </ul>
      <div style={{ width: '1px', height: '90px', margin: '0 auto', backgroundColor: 'var(--light-slate)' }} />
    </div>
  );
};

export default Social;
