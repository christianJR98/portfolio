import React from 'react';

import './navbar.styles.scss';

class Navbar extends React.Component{
    constructor(){
        super();
        this.state={
            menuMobileDisplay: false
        }
    }

    toggleMenuMobile = () =>{
        const {menuMobileDisplay} = this.state;
        if (menuMobileDisplay){
            this.setState({menuMobileDisplay: false},()=>{
                //Uncoment to se the height
                //console.log("My navbar" +document.getElementById('navbar').clientHeight );

                document.getElementById('options').classList.remove('visible');
                document.getElementById('social-media').classList.remove('visible');
                document.getElementById('navbar').classList.remove('extend');
            });
            
        }
        else{
            this.setState({menuMobileDisplay: true},()=>{
                document.getElementById('options').classList.add('visible');
                document.getElementById('social-media').classList.add('visible');
                //to se the number you have to uncommnet the code 
                //Se cambia a auto y se revisa la consola
                document.getElementById('navbar').classList.add('extend');
            }); 
        }
    }

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
            <nav className="navbar_class sticky-top d-flex" id="navbar">
                <div className="container d-flex justify-content-between h-100 align-items-center navbar_container">

                    <div className="icon-bars-container" onClick={this.toggleMenuMobile}>
                        <i className="fas fa-bars fa-2x icon-responsive"></i>
                    </div>

                    <div className="options d-flex h-100 align-items-center" id="options">
                        <div onClick={this.handleClick} className="option d-flex align-items-center px-3" data-section="home">Home</div>
                        <div onClick={this.handleClick} className="option d-flex align-items-center px-3" data-section="about-me" >About me</div>
                        <div onClick={this.handleClick} className="option d-flex align-items-center px-3" data-section="projects">Projects</div>
                        <div onClick={this.handleClick} className="option d-flex align-items-center px-3" data-section="contact-me">Contact me</div>
                        <div>
                            <button className="btn btn-info btn-lg rounded-pill px-5 resume-button">Resume</button>
                        </div>
                    </div>
                    <div className="social-media__container" id="social-media">
                        <a href="https://github.com/christianJR98" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github fa-2x social-media__icon"></i>
                        </a>

                        
                        {/*
                            <a href="https://github.com/christianJR98" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin-in fa-2x social-media__icon" ></i>
                            </a>
                        */ 
                        }
                        
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;