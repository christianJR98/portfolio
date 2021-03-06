import React from 'react';
import parse from 'html-react-parser';
import CustomButton from '../custom-button/custom-button.component';

import './project.styles.scss';

const Project= (props)=> {

        const {id,name, image, technologies} = props;
        
        return (
            <div className="card-project">
                
                <div className="card-project__header">
                    <h3 className="text-center header_text">{name}</h3>
                </div>
                
      
                <img className="card-project--img" src={process.env.PUBLIC_URL + image} alt=""/>
              
                <div className="technologies-container d-flex p-2 justify-content-center">
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
    
                <div className="d-flex justify-content-around py-3 buttons-container">
                    <CustomButton 
                        text="View Code"
                        otherClasses="project_button"      
                    />
                    <button className="btn btn-info btn-lg px-4 project_button" id={id} onClick={props.getIdProject}>Details</button>
    
                    <CustomButton 
                        text="View Project"
                        otherClasses="project_button"  
                    />
                </div>
    
            </div>
        )
}

export default Project;