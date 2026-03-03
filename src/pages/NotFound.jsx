import React from 'react';

const NotFound = () => (
  <div className="not-found">
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-md)', color: 'var(--green)', marginBottom: '20px' }}>404</p>
    <h1 style={{ fontSize: 'clamp(60px, 10vw, 120px)', color: 'var(--white)', marginBottom: '20px' }}>Page Not Found</h1>
    <p style={{ fontSize: 'var(--fz-lg)', color: 'var(--slate)', marginBottom: '50px' }}>
      This page doesn't exist. But I do.
    </p>
    <a href="/" className="big-button">Go Home</a>
  </div>
);

export default NotFound;
