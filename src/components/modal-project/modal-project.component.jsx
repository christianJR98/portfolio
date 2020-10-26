import React from 'react';

import Modal from "react-bootstrap/Modal";
import CustomButton from '../custom-button/custom-button.component';
import parse from 'html-react-parser';

import "bootstrap/dist/css/bootstrap.min.css";


import './modal-project.styles.scss';

const ModalProject = (props) =>{
    const {showModal, closeModal} = props;
    const {project:{name,description,technologies,url_video}} = props;
    return (
        <Modal className="project-modal" show={showModal} onHide={closeModal} size="lg">
            <div className="d-flex align-items-center justify-content-between">
                <div className="header-side-block"></div>

                <h2 className="text-center p-4 font-weight-bold">{name}</h2>

                <div className="header-side-block">
                    <i className="fas fa-times fa-3x close-modal-button" onClick={closeModal}></i>
                </div>
                
                
                
            </div>
            
            
            <iframe width="100%" height="315" src={url_video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  title={name}></iframe>

            <div className="container pb-5">
                <h3 className="mt-4">Description</h3>
                <p>{description}</p>

                <h3 className="mt-4">Technologies</h3>
                <div className="d-flex mb-3">
                {
                    technologies.map((tech) =>{
                        return ( 
                            <div key={tech.id} className="m-2">
                                {parse(tech.html)}
                            </div>
                        )
                    })
                }
                </div>
                

                <CustomButton
                    text="View Code"
                    otherClasses="mr-4"
                />
                <CustomButton
                    text="View Project"
                />

            </div>

        </Modal>
    )
}

export default ModalProject;