import React, { useState } from 'react';

const B = ({ children }) => <strong style={{ color: 'var(--lightest-slate)', fontWeight: 600 }}>{children}</strong>;
const L = ({ href, children }) => <a href={href} target="_blank" rel="noreferrer" className="inline-link">{children}</a>;

const research = [
  {
    company: 'AI4VS Lab, Columbia',
    title: 'Graduate Research Assistant',
    url: 'https://www.ai4vslab.org/',
    range: 'Sep 2025 - Present',
    duties: [
      <>Working under <B>Prof. Kaveri Thakoor</B> at the <L href="https://www.ai4vslab.org/">AI4VS Lab</L> on IRB-approved clinical research. Patients at <B>Irving Medical Center</B> have their retinal fundus images captured non-invasively using Remidio devices. The goal is predicting cardiac risk from what the eye reveals about the cardiovascular system.</>,
      <>Designing a joint regression and classification system using a <B>Vision Transformer backbone</B> with cross-attention fusion of vascular and clinical features, predicting continuous cardiac outputs and binary ischemia indicators from a single fundus image.</>,
      <>Built the end-to-end training infrastructure from scratch: <B>automated data validation</B>, experiment tracking, model versioning, and patient-level cross-validation to ensure the pipeline holds up under real clinical constraints.</>,
      <>Working closely with clinicians to understand the medical context behind the labels, which turned out to matter a lot for how the model was designed and how results were interpreted.</>,
      <>Also collaborating with <L href="https://holynski.org/"><B>Prof. Aleksander Holynski</B></L>, a research scientist at Google DeepMind, on computer vision research focused on scene rendering and visual synthesis.</>,
    ],
  },
  {
    company: 'Carnegie Mellon University',
    title: 'AI/ML Research Intern',
    url: 'https://www.cmu.edu/',
    range: 'Jun 2024 - Aug 2024',
    duties: [
      <>Spent a summer at <L href="https://www.cmu.edu/">Carnegie Mellon</L> under <L href="https://en.wikipedia.org/wiki/Raj_Reddy"><B>Dr. Raj Reddy</B></L>, one of the original architects of AI as a field and a <B>Turing Award winner</B>, working on multimodal machine learning for healthcare applications.</>,
      <>Read and presented new papers on <B>cross-modal fusion architectures</B> to the group every week, then built experimental models based on what we were discussing. A tight loop between reading the literature and actually implementing things.</>,
      <>The main project was <B>synthetic multi-lead ECG generation</B> using GANs with domain adaptation, directly attacking the problem of clinical data scarcity. Getting adversarial training to produce physiologically consistent signals across leads was where most of the work went.</>,
      <>Built an <B>evaluation framework</B> for benchmarking synthetic signal quality on both statistical fidelity and downstream diagnostic performance, making it possible to actually measure whether the generated signals were medically useful.</>,
      <>Presented research findings to the group at the end of the summer, covering architecture decisions, experimental results, and directions for follow-on work.</>,
    ],
  },
  {
    company: 'Taiwan-India Living Lab',
    title: 'Research Intern',
    url: 'https://www.srmist.edu.in/lab/taiwan-india-living-lab-on-big-data-analytics/',
    range: 'Jul 2024 - Dec 2024',
    duties: [
      <>Research Intern at the <L href="https://www.srmist.edu.in/lab/taiwan-india-living-lab-on-big-data-analytics/"><B>Taiwan-India Big Data Analytics Joint Living Lab</B></L>, a cross-institutional collaboration between SRM and National Chung Cheng University, working under <B>Prof. Ming-Hung Wang</B>.</>,
      <>Built <B>transformer-based multimodal architectures</B> with custom attention mechanisms for cross-modal hate speech detection, focusing on capturing implicit semantic relationships that don't surface when you treat language and visual content separately.</>,
      <>The harder problem was cultural variation. Hate speech patterns look very different across languages and contexts, so built <B>hierarchical feature extraction pipelines</B> with dynamic weighting schemes that adapt representations to different linguistic and visual environments.</>,
      <>Ran systematic ablations across attention configurations to understand which fusion strategies were actually doing the work, and used those insights to guide the final architecture choices.</>,
      <>Collaborated with researchers across two institutions in different time zones, which meant being deliberate about documentation and async communication to keep the project moving.</>,
    ],
  },
];

const Research = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="research" className="reveal">
      <h2 className="numbered-heading">Research</h2>
      <div style={{ display: 'flex', minHeight: '340px' }}>
        <div style={{ flexShrink: 0, width: '160px' }}>
          {research.map((r, i) => (
            <button key={i} className={`tab-btn${activeTab === i ? ' active' : ''}`} onClick={() => setActiveTab(i)}>
              {i === 0 ? 'AI4VS Lab' : i === 1 ? 'Carnegie Mellon' : 'Living Lab'}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: '20px', width: '100%' }}>
          {research.map((r, i) => (
            <div key={i} style={{ display: activeTab === i ? 'block' : 'none', padding: '10px 5px' }}>
              <h3 style={{ marginBottom: '5px', fontSize: 'var(--fz-xxl)', fontWeight: 500 }}>
                {r.title}{' '}
                <span style={{ color: 'var(--green)' }}>@ <L href={r.url}>{r.company}</L></span>
              </h3>
              <p style={{ marginBottom: '25px', color: 'var(--light-slate)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-xs)' }}>{r.range}</p>
              <ul style={{ padding: 0, listStyle: 'none' }}>
                {r.duties.map((d, j) => (
                  <li key={j} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '14px', fontSize: 'var(--fz-md)', lineHeight: 1.8, color: 'var(--slate)' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--green)' }}>▹</span>
                    {d}
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

export default Research;
