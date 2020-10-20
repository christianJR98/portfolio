import React from 'react';

import './navbar.styles.scss';

class Navbar extends React.Component{
    handleClick = (event) =>{
        const id = event.target.getAttribute('data-section');
        const yOffset = -50; 
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});

        return false;
    }
    render(){
        return(
            <nav className="navbar_class sticky-top d-flex">
                <div className="container d-flex justify-content-between h-100 align-items-center">
                    <div className="options d-flex h-100 align-items-center">
                        <div onClick={this.handleClick} className="option d-flex align-items-center px-3" data-section="home">Home</div>
                        <div onClick={this.handleClick} className="option d-flex align-items-center px-3" data-section="about-me" >About me</div>
                        <div onClick={this.handleClick} className="option d-flex align-items-center px-3" data-section="projects">Projects</div>
                        <div onClick={this.handleClick} className="option d-flex align-items-center px-3" data-section="contact-me">Contact me</div>
                        <div>
                            <button className="btn btn-info btn-lg rounded-pill px-5 resume-button">Resume</button>
                        </div>
                    </div>
                    <div className="social-media__container">
                        <i className="fab fa-github fa-2x social-media__icon"></i>
                        <i className="fab fa-linkedin-in fa-2x social-media__icon" ></i>

                        {/* <i className="fab fa-github-square fa-2x mr-3"></i>
                            <i className="fab fa-linkedin fa-2x" style={{color:'#0E76A8'}}></i>
                        */}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;