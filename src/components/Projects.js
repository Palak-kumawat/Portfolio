import React from 'react';
import './Projects.css';
import { FaFileExcel, FaDatabase, FaFilePowerpoint, FaFilePdf, FaVideo,} from 'react-icons/fa';

const Projects = ({ theme }) => {
  return (
    <section className={`projects-section ${theme}`} id="projects">
      <div className="container">
        <h2 className="section-title text-center mb-5 animate__animated animate__fadeInUp" data-scroll data-scroll-speed="1">Projects</h2>

        <div className="project-section mb-5">
          <h3 className="section-subtitle animate__animated animate__fadeInLeft">
            <FaFilePdf className="icon" /> CreditCard Weekly Financial Dashboard Project
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFileExcel className="pdf-icon text-success" />
                  <div>
                    <h5 className="pdf-title">Excel Files</h5>
                    <p className="pdf-desc">Raw data files used for analysis.</p>
                  </div>
                </div>
                <div className="d-flex flex-row gap-2">
                  <a href="/projects/creditcard-dashboard/data1.csv" className="btn-download" target="_blank" rel="noopener noreferrer">Excel 1</a>
                  <a href="/projects/creditcard-dashboard/data2.csv" className="btn-download" target="_blank" rel="noopener noreferrer">Excel 2</a>
                  <a href="/projects/creditcard-dashboard/data3.csv" className="btn-download" target="_blank" rel="noopener noreferrer">Excel 3</a>
                  <a href="/projects/creditcard-dashboard/data4.csv" className="btn-download" target="_blank" rel="noopener noreferrer">Excel 4</a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaDatabase className="pdf-icon text-warning" />
                  <div>
                    <h5 className="pdf-title">SQL File</h5>
                    <p className="pdf-desc">Query file for database operations.</p>
                  </div>
                </div>
                <a href="/projects/creditcard-dashboard/query.sql" className="btn-download" target="_blank" rel="noopener noreferrer">Download SQL</a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFilePowerpoint className="pdf-icon text-danger" />
                  <div>
                    <h5 className="pdf-title">Power BI PBIX File</h5>
                    <p className="pdf-desc">Power BI dashboard project file.</p>
                  </div>
                </div>
                <a href="/projects/creditcard-dashboard/report.pbix" className="btn-download" target="_blank" rel="noopener noreferrer">Download PBIX</a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFilePdf className="pdf-icon text-primary" />
                  <div>
                    <h5 className="pdf-title">Project Slides PDF</h5>
                    <p className="pdf-desc">Download all presentation slides in a single PDF file.</p>
                  </div>
                </div>
                <a href="/projects/creditcard-dashboard/creditcard-slides.pdf" className="btn-download" target="_blank" rel="noopener noreferrer">Download Slides</a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section mb-5">
          <h3 className="section-subtitle animate__animated animate__fadeInLeft">
            <FaFilePdf className="icon" /> Mobile Sales Dashboard Project
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFileExcel className="pdf-icon text-success" />
                  <div>
                    <h5 className="pdf-title">Excel Files</h5>
                    <p className="pdf-desc">Raw data files used for analysis.</p>
                  </div>
                </div>
                <div className="d-flex flex-row gap-2">
                  <a href="/projects/mobile-dashboard/data1.xlsx" className="btn-download" target="_blank" rel="noopener noreferrer">Excel 1</a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFilePowerpoint className="pdf-icon text-danger" />
                  <div>
                    <h5 className="pdf-title">PBIX File</h5>
                    <p className="pdf-desc">Power BI project file.</p>
                  </div>
                </div>
                <a href="/projects/mobile-dashboard/report.pbix" className="btn-download" target="_blank" rel="noopener noreferrer">Download PBIX</a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pdf-card shadow animate__animated animate__zoomIn">
                <div className="pdf-info">
                  <FaFilePdf className="pdf-icon text-primary" />
                  <div>
                    <h5 className="pdf-title">Slides PDF</h5>
                    <p className="pdf-desc">Presentation file in PDF format.</p>
                  </div>
                </div>
                <a href="/projects/mobile-dashboard/mobile-slides.pdf" className="btn-download" target="_blank" rel="noopener noreferrer">Download Slides</a>
              </div>
            </div>

            
          </div>
        </div>

        {/* Videos Section */}
        <div className="video-section">
          <h3 className="section-subtitle animate__animated animate__fadeInLeft">
            <FaVideo className="icon" /> Project Demo Videos
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow video-card animate__animated animate__fadeInUp">
                <div className="card-body">
                  <h5 className="card-title">CreditCard Weekly Financial Dashboard</h5>
                  <video controls width="100%">
                    <source src="/videos/creditcard-dashboard.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow video-card animate__animated animate__fadeInUp">
                <div className="card-body">
                  <h5 className="card-title">Mobile Sales Dashboard</h5>
                  <video controls width="100%">
                    <source src="/videos/mobile-dashboard.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
