import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import TopToBottom from '../lib/TopToBottom.js';
import whatsappicon from "../assets/whatsappicon.png";

function BackToTop({ className }) {
    useEffect(() => {
        TopToBottom('.scroll-to-top');
    }, []); // Added empty dependency array for proper effect cleanup

    return (
        <>
            
            <div className={`scroll-to-top d-flex flex-column align-items-center gap-2${className || ''}`}>
                <Link to="https://wa.me/971588996975"><img className="whatsapp" src={whatsappicon}/>
                <div className='fs-9'>Chat with us</div>
                </Link>
                <Link className='scrol-top-btn' to="#">
                    <i className="fa fa-angle-up" style={{ color: '#fff' }} />
                </Link >
            </div>
        </>
    );
}

export default BackToTop;
