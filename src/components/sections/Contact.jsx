import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('ra3439@columbia.edu');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '100px 0' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-md)', color: 'var(--green)', marginBottom: '20px' }}>
        05. What's Next?
      </p>
      <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 600, color: 'var(--white)', marginBottom: '20px' }}>
        Get In Touch
      </h2>
      <p style={{ fontSize: 'var(--fz-lg)', color: 'var(--slate)', lineHeight: 1.7, marginBottom: '50px' }}>
        I'm currently looking for Summer 2026 internship opportunities. Whether you have a question, an opportunity, or just want to say hi, my inbox is always open.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:ra3439@columbia.edu" className="big-button">Say Hello</a>
        <button
          onClick={copyEmail}
          className="big-button"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-sm)' }}
        >
          {copied ? '✓ Copied!' : 'Copy Email'}
        </button>
      </div>
    </section>
  );
};

export default Contact;
