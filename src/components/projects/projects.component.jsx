import React from 'react';

import Project from '../project/project.component';
import Triangle from '../triangle/triangle.component';
import Title from '../title/title.component';
import ModalProject from '../modal-project/modal-project.component';

import './projects.styles.scss';

import ProjectsData from './projects.data';

class Projects extends React.Component {
    constructor(){
        super();

        this.state = {
            showModal:false,
            projectModal:null
        }
    }

    getIdProject= (e) =>{
        //console.log(ProjectsData[e.target.id]);
        this.setState({
            showModal:true,
            projectModal:ProjectsData[e.target.id-1]
        })
    }

    closeModal = () =>{
        this.setState({showModal:false})
    }

    render(){
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
                        <Title
                            text="projects"
                            textIsBlack={false}
                        />
                    
                        <div className="row">
                            {
                                ProjectsData.map((project)=>{
                                    return (
                                        <div key = {project.id} className="col col-lg-4 col-md-6 col-12 py-3">
                                            <Project
                                                id={project.id}
                                                name = {project.name}
                                                image = {project.image}
                                                description = {project.description}
                                                technologies = {project.technologies}
                                                getIdProject = {this.getIdProject}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    
                    </div>
                    
    
                </div>
                { this.state.showModal ===true?
                    (<ModalProject 
                        showModal={this.state.showModal}
                        closeModal ={this.closeModal}
                        project ={this.state.projectModal}
                    />)
                    :
                    (null)
                }
               

            </section>
        );
    }
    
}

export default Projects;