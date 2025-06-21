import React from 'react';

const Footer = ( {theme} ) => {
  return (
    <footer className={` text-center py-3 border-top contact-section ${theme} text-center py-5`} data-scroll-section>
      <small>&copy; 2025 Palak Kumawat. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
