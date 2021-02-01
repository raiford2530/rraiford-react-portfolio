import './header.css';

function Header(props){
    return (
        <h1 className="header">
            {props.title}
            {props.sub ? <p className="sub-title">{props.sub}</p> : null}
        </h1>
    )
        
}

export default Header;