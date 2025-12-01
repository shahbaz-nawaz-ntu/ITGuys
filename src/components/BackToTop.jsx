import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import TopToBottom from '../lib/TopToBottom.js';
import whatsappicon from "../assets/whatsappicon.png";

function BackToTop({ className }) {
    useEffect(() => {
        TopToBottom('.scroll-to-top');
    }, []); // Added empty dependency array for proper effect cleanup\

    const handleQuoteClick = () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "quote_button_click",
    });
  }

  // existing functionality (WhatsApp / popup / scroll)
};

    return (
        <>
            
            <div className={`scroll-to-top d-flex flex-column align-items-center gap-2${className || ''}`}>
                <Link to="https://wa.me/971588996975" onClick={handleQuoteClick}><img className="whatsapp" src={whatsappicon}/>
                <div className='fs-9'>Chat Now</div>
                </Link>
                <Link className='scrol-top-btn' to="#">
                    <i className="fa fa-angle-up" style={{ color: '#fff' }} />
                </Link >
            </div>
        </>
    );
}

export default BackToTop;
