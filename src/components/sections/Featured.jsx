import React from 'react';

const projects = [
  {
    title: 'Cardiac Vision System',
    description:
      'A joint regression and classification system predicting continuous cardiac outputs and binary ischemia indicators from retinal fundus images. Built on a Vision Transformer backbone with cross-attention fusion of vascular and clinical features across 200+ patients.',
    tech: ['PyTorch', 'Vision Transformer', 'Python', 'Cross-attention'],
    github: 'https://github.com/ramyamanasa',
    external: '',
  },
  {
    title: 'Synthetic ECG Generation',
    description:
      'A conditional GAN architecture for synthetic multi-lead ECG generation with domain adaptation. Produces physiologically realistic signals under clinical data scarcity constraints, evaluated against statistical fidelity and downstream diagnostic performance benchmarks.',
    tech: ['PyTorch', 'Conditional GAN', 'Domain Adaptation', 'Python'],
    github: 'https://github.com/ramyamanasa',
    external: '',
  },
  {
    title: 'Trading Compliance Platform',
    description:
      'A real-time behavioral signal processing pipeline over full audit log streams, performing temporal pattern detection, trade timing analysis, and signal correlation to flag anomalous activity. Deployed as containerized services with deterministic state tracking.',
    tech: ['Python', 'Docker', 'CI/CD', 'SQL', 'ClickHouse'],
    github: 'https://github.com/ramyamanasa',
    external: '',
  },
];

const Featured = () => (
  <section id="projects">
    <h2 className="numbered-heading">Some Things I've Built</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
      {projects.map(({ title, description, tech, github, external }, i) => (
        <div key={i} style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          alignItems: 'center',
        }}>
          <div style={{
            order: i % 2 === 0 ? 1 : 2,
            gridColumn: i % 2 === 0 ? '1' : '2',
            gridRow: 1,
            position: 'relative',
            height: '280px',
            backgroundColor: 'var(--light-navy)',
            borderRadius: 'var(--border-radius)',
            border: '1px solid var(--lightest-navy)',
          }} />

          {/* Content */}
          <div style={{
            order: i % 2 === 0 ? 2 : 1,
            gridColumn: i % 2 === 0 ? '2' : '1',
            gridRow: 1,
            position: 'relative',
            zIndex: 2,
            textAlign: i % 2 === 0 ? 'right' : 'left',
          }}>
            <p style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-xs)', marginBottom: '10px' }}>
              Featured Project
            </p>
            <h3 style={{ fontSize: 'clamp(24px, 5vw, 28px)', marginBottom: '20px' }}>
              {external ? (
                <a href={external} target="_blank" rel="noreferrer" className="inline-link">{title}</a>
              ) : title}
            </h3>
            <div style={{
              padding: '25px',
              borderRadius: 'var(--border-radius)',
              backgroundColor: 'var(--light-navy)',
              boxShadow: '0 10px 30px -15px var(--navy-shadow)',
              marginBottom: '20px',
            }}>
              <p style={{ color: 'var(--light-slate)', fontSize: 'var(--fz-md)', lineHeight: 1.7 }}>
                {description}
              </p>
            </div>
            <ul style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              listStyle: 'none',
              padding: 0,
              justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
              marginBottom: '15px',
            }}>
              {tech.map((t, j) => (
                <li key={j} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-xs)', color: 'var(--light-slate)' }}>{t}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '15px', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
              {github && (
                <a href={github} target="_blank" rel="noreferrer" style={{ color: 'var(--light-slate)', transition: 'var(--transition)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Featured;
