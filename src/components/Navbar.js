import React from 'react';

const Navbar = ({ toggleTheme, theme }) => {
  return (
   <nav className={`navbar navbar-expand-lg shadow-sm ${theme}`}>
      <div className="container">
        <a className="navbar-brand brand-name" href="#">Palak Kumawat</a>
        <div>
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item">
              <button className="btn btn-sm btn-outline-secondary ms-3" onClick={toggleTheme}>
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
