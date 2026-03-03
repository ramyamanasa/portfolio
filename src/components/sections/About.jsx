import React from 'react';

const About = () => (
  <section id="about" className="reveal">
    <h2 className="numbered-heading">About Me</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px', alignItems: 'start' }}>
      <div style={{ fontSize: 'var(--fz-lg)', lineHeight: 1.8, color: 'var(--slate)' }}>
        <p style={{ marginBottom: '20px' }}>
          Somewhere along learning Computer Science, I realized machine learning was the one tool
          that could go anywhere. The more domains I explored, the more it kept showing up as the
          thing that made the hardest problems tractable. That curiosity grew into a focus, and
          that focus grew right into the new era of AI.
        </p>
        <p style={{ marginBottom: '20px' }}>
          I'm currently doing my masters in Computer Science at{' '}
          <a href="https://www.columbia.edu/" target="_blank" rel="noreferrer" className="inline-link">Columbia</a>
          , where most of my time goes into AI and ML research. Right now I'm working on vision
          systems that predict cardiac risk from retinal images, which is exactly the kind of
          problem I find most interesting: real stakes, messy data, and no clean answers.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Before Columbia, I got to work across a few different worlds. I analyzed telemetry from
          hundreds of thousands of electric vehicles at{' '}
          <a href="https://www.atherenergy.com/" target="_blank" rel="noreferrer" className="inline-link">Ather Energy</a>
          , did research at{' '}
          <a href="https://www.cmu.edu/" target="_blank" rel="noreferrer" className="inline-link">Carnegie Mellon</a>
          , and contributed to an open-source ML framework with thousands of users. Each of those
          taught me something different about what it actually takes to build things that work
          outside a notebook.
        </p>
        <p>
          Outside of all that, I watch cricket and movies, play badminton whenever I can convince
          someone to join, and I'm always mid-planning the next trip. Mountains and beaches, I
          refuse to pick just one.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="photo-wrapper">
          <img src="/me.jpg" alt="Ramya Amancherla" />
          <div className="photo-overlay" />
          <div className="photo-border" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
