import React from 'react';

import './footer.styles.scss';

const Footer = () =>{
    return (
        <footer className="footer text-center d-flex justify-content-center align-items-center">
            <p className="text-white footer__text">{new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;