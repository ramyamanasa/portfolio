import React, { useState } from 'react';

const B = ({ children }) => <strong style={{ color: 'var(--lightest-slate)', fontWeight: 600 }}>{children}</strong>;
const L = ({ href, children }) => <a href={href} target="_blank" rel="noreferrer" className="inline-link">{children}</a>;

const jobs = [
  {
    company: 'Ather Energy',
    title: 'Analyst Intern',
    url: 'https://www.atherenergy.com/',
    range: 'Jan 2025 - May 2025',
    duties: [
      <>Analyzed production telemetry from <B>350K+ connected electric vehicles</B> using ClickHouse SQL, building automated anomaly detection workflows that identified battery degradation patterns and connectivity regressions across the fleet.</>,
      <>Built a centralized <B>analytics dashboard</B> integrating manufacturing and fleet telemetry streams, giving the engineering team a single surface for real-time quality monitoring and predictive maintenance decisions.</>,
      <>Traced the root cause of cross-platform <B>data synchronization failures</B> between Firebase and internal billing services, which had been causing silent data loss across customer records.</>,
      <>Designed <B>automated reporting pipelines</B> that replaced manual weekly data pulls, cutting turnaround time significantly and reducing the chance of human error in production metrics.</>,
      <>Worked closely with the hardware and software teams to correlate vehicle-level sensor data with field failure reports, surfacing patterns that fed directly into the next product revision cycle.</>,
    ],
  },
  {
    company: 'Unify AI',
    title: 'ML Contributor',
    url: 'https://unify.ai/',
    range: 'Nov 2023 - Aug 2024',
    duties: [
      <>Contributed to <L href="https://github.com/unifyai/ivy"><B>Ivy</B></L>, an open-source ML transpiler at a VC-backed AI infrastructure startup, implementing <B>cross-framework conversion components</B> that let models run across TensorFlow, PyTorch, and JAX without modification.</>,
      <>Built <B>framework-agnostic API abstractions</B> that mapped framework-specific operations to unified function signatures, a core part of what makes the transpiler work across backends.</>,
      <>Contributed across multiple release cycles in a production open-source codebase with <B>thousands of active users</B>, working within a global contributor base and going through real code review cycles.</>,
      <>Identified and fixed edge cases in the transpilation layer where operations behaved inconsistently across frameworks, improving the reliability of model conversions for downstream users.</>,
      <>Wrote tests for newly implemented functions and helped maintain coverage across a rapidly evolving API surface, keeping the library stable as new framework versions shipped.</>,
    ],
  },
];

const Jobs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="jobs" className="reveal">
      <h2 className="numbered-heading">Professional Experience</h2>
      <div style={{ display: 'flex', minHeight: '340px' }}>
        <div style={{ flexShrink: 0, width: '130px' }}>
          {jobs.map((job, i) => (
            <button key={i} className={`tab-btn${activeTab === i ? ' active' : ''}`} onClick={() => setActiveTab(i)}>
              {job.company}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: '20px', width: '100%' }}>
          {jobs.map((job, i) => (
            <div key={i} style={{ display: activeTab === i ? 'block' : 'none', padding: '10px 5px' }}>
              <h3 style={{ marginBottom: '5px', fontSize: 'var(--fz-xxl)', fontWeight: 500 }}>
                {job.title}{' '}
                <span style={{ color: 'var(--green)' }}>@ <L href={job.url}>{job.company}</L></span>
              </h3>
              <p style={{ marginBottom: '25px', color: 'var(--light-slate)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-xs)' }}>{job.range}</p>
              <ul style={{ padding: 0, listStyle: 'none' }}>
                {job.duties.map((duty, j) => (
                  <li key={j} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '12px', fontSize: 'var(--fz-md)', lineHeight: 1.8, color: 'var(--slate)' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--green)' }}>▹</span>
                    {duty}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
