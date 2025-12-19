import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopToBottom from '../lib/TopToBottom.js';
import whatsappicon from "../assets/whatsappicon.png";
import { GrPhone } from "react-icons/gr";

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
                <Link
                    to="tel:+971588996975"
                    onClick={handleQuoteClick}
                    className='d-flex flex-column align-items-center text-decoration-none text-black transition-colors duration-300 hover:text-[var(--theme-color2)]'
                >
                    <GrPhone size={30} color='green' />
                    <div className='fs-9'>Call Now</div>
                </Link>

                <Link
                    to="https://wa.me/971588996975"
                    onClick={handleQuoteClick}
                    className='d-flex flex-column align-items-center text-decoration-none text-black transition-colors duration-300 hover:text-[var(--theme-color2)]'
                >
                    <img className="whatsapp" src={whatsappicon} alt="WhatsApp" />
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
