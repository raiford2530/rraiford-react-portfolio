import ContentContainer from "../ContentContainer/ContentContainer";
import Header from "../../components/Header/Header";
import {useLocation} from 'react-router-dom';

function ProjectDetails(props){

    const location = useLocation();
    return (
        <ContentContainer>
            <div className="row">
                <div className="col">
                    <Header title={location.state.title}/>
                    <p>{location.state.description}</p>
                </div>               
            </div>
            <div className="row">
                <div className="col">
                    <img src={location.state.image}/>
                    <a href={location.state.url} rel="noreferrer" target="_blank">Live Site</a>
                    <a href={props.repo} rel="noreferrer" target="_blank">Github Repo</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Technical Overview</h2>
                    <p>
                        {location.state.details}
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Technologies</h2>
                    <ul>
                        {props.technologies}
                    </ul>
                </div>
            </div>
        </ContentContainer>
    )
}

export default ProjectDetails;