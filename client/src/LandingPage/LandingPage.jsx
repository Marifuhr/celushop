import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import NavBar from '../NavBar/NavBar';
import CaptionCarousel from '../Carousel/CaptionCarousel';
import Footer from '../Footer/footer';

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
        <div className="flex justify-center flex-col items-center">
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a href="https://google.com/maps/place/Mendoza,+Susana,+Santa+Fe/@-31.3576399,-61.5210805,17z/data=!3m1!4b1!4m6!3m5!1s0x95cabb2c03f7ea09:0x66df2ec9c1f29032!8m2!3d-31.3576445!4d-61.5185056!16s%2Fg%2F11bymv33vb?entry=ttu" target="_blank" rel="noopener noreferrer">
              <img src="https://www.lavanguardia.com/files/image_449_220/uploads/2020/02/07/5fa902b44316c.jpeg" alt="Google Maps" style={{ margin: '0 auto', marginTop: '20px'}} />
            </a>
            <>
              <h2 style={{ marginTop:"30px"}}>Estamos en Google Maps</h2>
            </>
          </div>
        </div>
          
      </footer>
      <Footer />
          {/* <div className="flex justify-center mt -4" >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <span style={{ marginRight: '20px' }}>
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <span style={{ marginRight: '20px' }}>
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </span>
            </a>
            <a href="https://wa.me/3492600815" target="_blank" rel="noopener noreferrer">
              <span style={{ marginRight: '20px' }}>
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              </span>
            </a>
          </div>
        </div>
        <p className="ml-2" style={{ marginTop: '40px' }}>Mendoza 235 - SUSANA</p>
        <p className="ml-2" style={{ marginTop: '20px' }}>Contactanos al 3492-600815</p>
        <p className="ml-2" style={{ marginTop: '20px' }}>Copyright © 2023 - All right reserved</p>
    </div> */}
    </div>
   
  );
}