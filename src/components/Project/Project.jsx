import './project.css';
import {Link} from 'react-router-dom';

function Project(props) {
    const projectLinkProps = {
        pathname: `/projects/${props.title}`,
        state: {
            title: props.title,
            description: props.description,
            image: props.image,
            details: props.details,
            url: props.url
        }
    }

  return (
    <Link to={projectLinkProps} style={{textDecoration:'none', color:'white'}}>
    <div className="card bg-project">
      <img src={props.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.description}.
        </p>
      </div>
    </div>
    </Link>
  );
}

export default Project;
