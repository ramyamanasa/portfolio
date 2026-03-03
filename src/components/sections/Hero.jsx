import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TYPED_TEXT = "I build ML systems that belong in the real world.";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1900);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const startDelay = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setTyped(TYPED_TEXT.slice(0, i + 1));
        i++;
        if (i >= TYPED_TEXT.length) {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1200);
        }
      }, 55);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(startDelay);
  }, [isMounted]);

  const items = [
    <p key="0" style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-md)', margin: '0 0 30px 4px' }}>
      Hi, my name is
    </p>,
    <h1 key="1" className="big-heading" style={{ color: 'var(--white)', marginBottom: '10px' }}>
      Ramya Amancherla.
    </h1>,
    <h2 key="2" className="big-heading" style={{ color: 'var(--light-slate)', minHeight: '88px' }}>
      {typed}
      {showCursor && <span style={{ color: 'var(--green)', animation: 'blink 1s step-end infinite' }}>|</span>}
    </h2>,
    <p key="3" style={{ margin: '20px 0 0', maxWidth: '560px', color: 'var(--slate)', fontSize: 'var(--fz-lg)', lineHeight: 1.8 }}>
      As a CS researcher deeply passionate about <strong style={{ color: 'var(--lightest-slate)' }}>computer vision</strong> and <strong style={{ color: 'var(--lightest-slate)' }}>machine learning for healthcare</strong>, I specialize in building systems that move from research into deployment. With experience spanning clinical AI, large-scale data pipelines, and open-source ML infrastructure, I work at the intersection of rigorous research and real-world impact.
    </p>,
    <a key="4" href="mailto:ra3439@columbia.edu" className="big-button magnetic-btn" style={{ marginTop: '50px' }}>
      Get in touch
    </a>,
  ];

  return (
    <>
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: '100vh', justifyContent: 'center', padding: 0 }}>
        <TransitionGroup component={null}>
          {isMounted && items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={500}>
              <div style={{ transitionDelay: `${(i + 1) * 100}ms` }}>{item}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </section>
    </>
  );
};

export default Hero;
