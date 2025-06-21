import React from 'react';

const Resume = ( {theme} ) => {
  return (
    <section id="resume" className={`contact-section ${theme} text-center py-5`}>
      <h2 className="mb-3 section-title animate-slide-up">Resume</h2>
      <p className="mb-3">Download my resume below:</p>
      <a href="/resume.pdf" target="_blank" className="btn btn-primary">Download Resume</a>
    </section>
  );
};

export default Resume;
