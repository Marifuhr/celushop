import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import NavBar from '../NavBar/NavBar';
import CaptionCarousel from '../Carousel/CaptionCarousel';

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <div>
        <div style={{ marginTop: '40px' }}>
          {/* Aquí puedes agregar cualquier otro contenido adicional */}
        </div>
        <CaptionCarousel />
      </div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content" style={{ marginTop: '40px', boxShadow: '2px 0 5px rgba(0, 1, 0, 0.20)' }}>
  <div className="flex items-center justify-center">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <span style={{ marginRight: '30px' }}>
        <FontAwesomeIcon icon={faFacebook} className="icon" />
      </span>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <span style={{ marginRight: '30px' }}>
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </span>
    </a> <a href="https://wa.me/3492600815" target="_blank" rel="noopener noreferrer">
      <span style={{ marginRight: '30px' }}>
        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
      </span>
    </a>
   
  </div>
  <p className="ml-2"  style={{ marginTop: '40px' }}>Contactanos al 3492-600815</p>
  <p className="ml-2"  style={{ marginTop: '20px' }}>Copyright © 2023 - All right reserved</p>
</footer>
    </div>
  );
}