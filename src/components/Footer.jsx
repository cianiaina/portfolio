// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // icônes pour réseaux sociaux

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p style={styles.text}>© 2025 Francia Andriambeloniaina — All Rights Reserved.</p>
        <div style={styles.socials}>
          <a href="https://github.com/cianiaina" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 10px',
    marginTop: '40px',
    borderTop: '1px solid #444',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  text: {
    margin: '0 0 10px 0',
    fontSize: '0.95rem',
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    fontSize: '1.3rem',
  },
  icon: {
    color: '#fff',
    transition: 'color 0.3s',
    textDecoration: 'none',
  },
};

export default Footer;
