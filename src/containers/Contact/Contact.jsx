import ContentContainer from "../ContentContainer/ContentContainer";
import Header from "../../components/Header/Header";

function Contact(){
    return (
        <ContentContainer>
            <div className="row">
                <Header title="Contact Me"/>
            </div>
            <div className="row">
                <div className="text-center">
                    If you would like to contact me you can email me at <a href="mailto:rjraiford87@gmail.com">rjraiford87@gmail.com</a>
                </div>
            </div>           
        </ContentContainer>
    )
}

export default Contact;