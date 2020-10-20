import React from 'react';

import Project from '../project/project.component';
import Triangle from '../triangle/triangle.component';

import './projects.styles.scss';

import ProjectsData from './projects.data';

const Projects = (props) =>{
    return(
        <section id="projects">
            <Triangle 
                    color="#c2bbbb"
                    backgroundColor="#252934"
                    height="80px"
                    isReverse= {true}
                />
            <div className="projects-container pt-4">

                <div className="container">
                    <h2 className="display-3 text-center text-capitalize py-4"><strong>projects</strong></h2>
                    
                    <div className="row">
                        {
                            ProjectsData.map((project)=>{
                                return (
                                    <div key = {project.id} className="col col-lg-4 col-md-6 col-sm-6 py-3">
                                        <Project
                                            name = {project.name}
                                            image = {project.image}
                                            description = {project.description}
                                            technologies = {project.technologies}
                                        />
                                    </div>
                                )
                            })
                        }

                    </div>
                
                </div>
                

            </div>
            
        </section>
    );
}

export default Projects;