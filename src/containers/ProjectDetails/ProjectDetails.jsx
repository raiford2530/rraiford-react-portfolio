import ContentContainer from "../ContentContainer/ContentContainer";
import Header from "../../components/Header/Header";
import {useParams} from 'react-router-dom';
import './projectdetails.css';
import projects from '../../data/projects';

function ProjectDetails(props){

    const params = useParams();
    const project = projects.find(x => x.title === params.name);

    console.log(params);
    return (
        <ContentContainer>
            <div className="row">
                <div className="col">
                    <Header title={project.title} sub={project.description}/>
                </div>               
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col-sm-12 col-md-8">
                    <img className="project-image img-fluid mb-4" src={project.image} alt={project.title}/>
                    <div className="d-flex justify-content-center">
                        <a className="btn project-btn me-3" href={project.url} rel="noreferrer noopener" target="_blank">Live Site</a>
                        <a className="btn project-btn" href={project.repo} rel="noreferrer noopener" target="_blank">Github Repo</a>
                    </div>                
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <h2 className="mb-3">Technical Overview</h2>
                    <p>
                        {project.details}
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="mb-4">Technologies</h2>
                    <ul className="tech-list">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </ContentContainer>
    )
}

export default ProjectDetails;