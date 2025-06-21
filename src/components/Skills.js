import React from 'react';
import './Skills.css';
import { FaFileExcel } from 'react-icons/fa';
import { SiMysql, SiPython } from 'react-icons/si';
import { BiBarChartAlt2 } from 'react-icons/bi';

const skillData = [
  { name: 'Excel', level: 80, icon: <FaFileExcel className="skill-icon" /> },
  { name: 'SQL', level: 85, icon: <SiMysql className="skill-icon" /> },
  { name: 'Power BI', level: 80, icon: <BiBarChartAlt2 className="skill-icon" /> },
  { name: 'Python', level: 79, icon: <SiPython className="skill-icon" /> },
];

const Skills = ({ theme }) => {
  return (
    <section id="skills" className={`skills-section ${theme} py-5`}>
      <div className="container">
        <h2 className="text-center mb-5 section-title animate-slide-up">Skills</h2>
        <div className="row">
          {skillData.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4 text-center">
              <div className="skill-card p-3 rounded shadow animate__animated animate__fadeInUp">
                <div className="mb-3">{skill.icon}</div>
                <h5>{skill.name}</h5>
                <div className="progress" style={{ height: '8px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>{skill.level}%</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
