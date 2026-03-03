import React, { useState, useEffect } from 'react';

const Email = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setTimeout(() => setIsMounted(true), 1000); }, []);

  return (
    <div style={{
      width: '40px',
      position: 'fixed',
      bottom: 0,
      right: '40px',
      zIndex: 10,
      opacity: isMounted ? 1 : 0,
      transition: 'opacity 0.5s ease',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <a href="mailto:ra3439@columbia.edu" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fz-xxs)',
          letterSpacing: '0.1em',
          writingMode: 'vertical-rl',
          color: 'var(--light-slate)',
          textDecoration: 'none',
          transition: 'var(--transition)',
        }}
          onMouseEnter={e => { e.target.style.color = 'var(--green)'; e.target.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.target.style.color = 'var(--light-slate)'; e.target.style.transform = 'translateY(0)'; }}>
          ra3439@columbia.edu
        </a>
        <div style={{ width: '1px', height: '90px', backgroundColor: 'var(--light-slate)' }} />
      </div>
    </div>
  );
};

export default Email;
