import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <ul className="social-icons">
        <li>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="social-line">
          <span></span>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar; 