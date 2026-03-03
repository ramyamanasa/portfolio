import React, { useRef, useState } from 'react';

const cards = [
  {
    label: 'Building',
    title: 'Geometric Feature Matching and Stitching',
    description: 'Classical computer vision pipeline for panoramic image stitching, built from scratch with NumPy. No OpenCV shortcuts.',
    link: 'https://github.com/ramyamanasa/Geometric-Feature-Matching-and-Stitching',
    linkLabel: 'GitHub',
  },
  {
    label: 'Exploring',
    title: 'Reasoning Models and RL',
    description: 'How RL is replacing supervised learning for reasoning in AI systems. DeepSeek-R1 made everyone rethink what training actually needs to look like.',
    link: 'https://arxiv.org/abs/2501.12948',
    linkLabel: 'DeepSeek-R1',
  },
  {
    label: 'Reading',
    title: 'DeepSeek-R1',
    description: 'Reasoning from pure RL, no human-annotated traces needed. The paper everyone in ML has an opinion on.',
    link: 'https://arxiv.org/abs/2501.12948',
    linkLabel: 'arxiv',
  },
  {
    label: 'Watching',
    title: 'Deep Dive into LLMs like ChatGPT',
    description: "The full training stack, RLHF, and where it's all heading. Andrej Karpathy at his best.",
    link: 'https://www.youtube.com/watch?v=7xTGNNLPyMI',
    linkLabel: 'YouTube',
  },
];

const TiltCard = ({ card }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    el.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card"
      style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'transform 0.1s ease, border-color 0.25s ease, box-shadow 0.25s ease' }}
    >
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-xs)', color: 'var(--green)' }}>{card.label}</p>
      <h3 style={{ fontSize: 'var(--fz-xl)', fontWeight: 600, color: 'var(--white)' }}>{card.title}</h3>
      <p style={{ fontSize: 'var(--fz-md)', lineHeight: 1.7, color: 'var(--slate)', flexGrow: 1 }}>{card.description}</p>
      <a href={card.link} target="_blank" rel="noreferrer"
        style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-xs)', color: 'var(--green)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
        {card.linkLabel} ↗
      </a>
    </div>
  );
};

const Currently = () => (
  <section id="currently" className="reveal">
    <h2 className="numbered-heading">Currently</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      {cards.map((card, i) => <TiltCard key={i} card={card} />)}
    </div>
  </section>
);

export default Currently;
