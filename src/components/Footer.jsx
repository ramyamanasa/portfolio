import React from 'react';

const Footer = () => (
  <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px', textAlign: 'center' }}>
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-xxs)', color: 'var(--light-slate)', lineHeight: 1.8 }}>
      <a href="https://github.com/ramyamanasa" target="_blank" rel="noreferrer" className="inline-link">
        Ramya Manasa Amancherla
      </a>
    </p>
  </footer>
);

export default Footer;
