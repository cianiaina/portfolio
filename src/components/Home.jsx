// src/components/Home.jsx
import React from 'react';
import './Home.css';

function Home() {
  // Définissez le chemin de votre CV (PDF est fortement recommandé)
  const cvFilePath = "/Francia_Andriambeloniaina_CV.jpg"; 
  // Assurez-vous que votre fichier PDF est bien nommé "Francia_Andriambeloniaina_CV.pdf"
  // et qu'il est placé dans le dossier 'public' de votre projet.

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <p className="small-label">Hi there!</p>
        <h1 className="main-title">
          I'm <span className="highlight">Francia</span><br />
          a passionate <span className="highlight">Web Developer</span>
        </h1>

        {/* Le bouton Télécharger CV est maintenant un lien <a> avec la classe cta-button */}
        <a 
          href={cvFilePath} 
          download="Francia_Andriambeloniaina_CV.jpg" /* Nom du fichier suggéré au téléchargement */
          className="cta-button"
        >
          Download My CV
        </a>
      </div>
    </section>
  );
}

export default Home;