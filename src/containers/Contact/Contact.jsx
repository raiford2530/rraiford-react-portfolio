import ContentContainer from "../ContentContainer/ContentContainer";
import Header from "../../components/Header/Header";
import 'font-awesome/css/font-awesome.min.css';
import './contact.css';

function Contact(){
    return (
        <ContentContainer>
            <div className="row">
                <Header title="Contact Me"/>
            </div>
            <div className="row mb-5">
                <div className="text-center">
                    If you would like to contact me you can email me at <a href="mailto:rjraiford87@gmail.com">rjraiford87@gmail.com</a>
                </div>
            </div> 
            <div className="row">
                <div className="d-flex justify-content-center">
                    <a href="https://www.github.com/raiford2530" _target="_blank" rel="noreferrer noopener"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/rashawn-raiford/" rel="noreferrer noopener" _target="blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
            </div>              
        </ContentContainer>
    )
}

export default Contact;