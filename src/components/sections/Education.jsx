import React, { useState } from 'react';

const B = ({ children }) => <strong style={{ color: 'var(--lightest-slate)', fontWeight: 600 }}>{children}</strong>;
const L = ({ href, children }) => <a href={href} target="_blank" rel="noreferrer" className="inline-link">{children}</a>;

const education = [
  {
    school: 'Columbia University',
    url: 'https://www.columbia.edu/',
    degree: 'MS in Computer Science',
    range: 'Aug 2025 - Dec 2026',
    details: [
      <>Working as a <B>Research Assistant</B> at the <L href="https://www.ai4vslab.org/">AI4VS Lab</L> under <B>Prof. Kaveri Thakoor</B> on IRB-approved clinical research, using non-invasive retinal fundus imaging via Remidio devices at <B>Irving Medical Center</B> to build vision systems that predict cardiac risk from fundus images.</>,
      <>Also working with <L href="https://holynski.org/"><B>Prof. Aleksander Hołyński</B></L>, a research scientist at Google DeepMind, on computer vision research focused on scene rendering and visual synthesis.</>,
      <>Built a multi-client <B>trading platform with compliance analytics</B> under <B>Prof. Gail Kaiser</B>, implementing a real-time behavioral signal processing pipeline over audit log streams, temporal pattern detection, and containerized services deployed on GCP.</>,
    ],
  },
  {
    school: 'SRM Institute of Science and Technology',
    url: 'https://www.srmist.edu.in/',
    degree: 'BTech in Computer Science',
    range: 'Jun 2021 - Jun 2025',
    details: [
      <>Graduated with a <B>GPA of 9.54/10</B> and received the <B>Performance-Based Merit Scholarship</B> for academic excellence in the Computer Science department.</>,
      <>Served as <B>Treasurer for the Directorate of Student Affairs</B>, overseeing all financial operations and treasury management for student-led initiatives across the institution.</>,
      <>Member of the <L href="https://www.srmist.edu.in/lab/taiwan-india-living-lab-on-big-data-analytics/"><B>Taiwan-India Big Data Analytics Joint Living Lab</B></L>, a cross-institutional research collaboration between SRM and National Chung Cheng University focused on large-scale data analytics.</>,
      <>Competed and won at the <B>GIM Big Data Analytics Hackathon</B> hosted by Goa Institute of Management, one of India's premier business schools.</>,
      <>Completed an AI/ML Research Internship at <L href="https://www.cmu.edu/"><B>Carnegie Mellon University</B></L>, working on synthetic multi-lead ECG generation using conditional GANs with domain adaptation under clinical data scarcity constraints.</>,
      <>Worked on several in-house ML projects for the <B>SRM Agriculture College</B>, applying machine learning to real agricultural datasets and problems.</>,
      <>Member of <B>Blue Cross of India</B>, Chennai, volunteering for animal welfare and rescue operations. Volunteer at <B>Taare Zameen Foundation</B>, contributing to educational outreach for underprivileged children.</>,
    ],
  },
];

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="education" className="reveal">
      <h2 className="numbered-heading">Education</h2>
      <div style={{ display: 'flex', minHeight: '400px' }}>
        <div style={{ flexShrink: 0, width: '160px' }}>
          {education.map((edu, i) => (
            <button key={i} className={`tab-btn${activeTab === i ? ' active' : ''}`} onClick={() => setActiveTab(i)}>
              {i === 0 ? 'Columbia' : 'SRM'}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: '20px', width: '100%' }}>
          {education.map((edu, i) => (
            <div key={i} style={{ display: activeTab === i ? 'block' : 'none', padding: '10px 5px' }}>
              <h3 style={{ marginBottom: '5px', fontSize: 'var(--fz-xxl)', fontWeight: 500 }}>
                {edu.degree}{' '}
                <span style={{ color: 'var(--green)' }}>
                  @ <L href={edu.url}>{edu.school}</L>
                </span>
              </h3>
              <p style={{ marginBottom: '25px', color: 'var(--light-slate)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fz-xs)' }}>
                {edu.range}
              </p>
              <ul style={{ padding: 0, listStyle: 'none' }}>
                {edu.details.map((d, j) => (
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

export default Education;
