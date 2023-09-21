import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="flex items-center justify-center">
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="https://twitter.com" >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
        <p className="ml-2">Copyright © 2023 - All right reserved</p>
      </footer>
    </div>
  );
}