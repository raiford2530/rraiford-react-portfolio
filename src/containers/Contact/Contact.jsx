import ContentContainer from "../ContentContainer/ContentContainer";
import Header from "../../components/Header/Header";
import 'font-awesome/css/font-awesome.min.css';
import './contact.css';
import emailjs from 'emailjs-com';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';
import apiKeys from './APIKeys';

function Contact(){

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorState, setErrorState] = useState({
        errors: {
            name: "",
            email: "",
            message: ""
        }
    })

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormState({...formState, [name]: value});
    }

    const validate = () => {
        const errors = {};
        let isValid = true;

        if(!formState.name){
            errors["name"] = "Name is required";
            isValid = false;
        }

        if(!formState.email){
            errors["email"] = "Email is required";
            isValid = false;
        }

        if(!formState.message){
            errors["message"] = "Message is required";
            isValid = false
        }

        setErrorState(errors);

        return isValid;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(!validate()){
            return;
        }

        emailjs.sendForm(apiKeys.serviceId, 'portfolio', e.target, apiKeys.userId)
            .then(result => {
                toast("Message sent!");   
            })
            .catch(err => {
                toast("There was an error sending your message.")
            })

            setFormState({name: '', email: '', message: ''});
    }

    return (
        <ContentContainer>
            <ToastContainer autoClose={2000} hideProgressBar={true}/>
            <div className="row">
                <Header title="Contact Me"/>
            </div>
            <div className="row mb-5">
                <div className="text-center">
                    If you would like to contact me you can email me at <a href="mailto:rjraiford87@gmail.com">rjraiford87@gmail.com</a> or send a message below.
                </div>
            </div> 
            <div className="row d-flex justify-content-center">
                <form onSubmit = {onSubmit} id="contact-form">
                    <div class="mb-3">
                        <label for="name" className="form-label">Name:</label>
                        <input name='name' type='text' placeholder='Name' id="name" className="form-control" onChange={onChange} value={formState.name}/>
                        {
                            errorState.name ? <div className="invalid">{errorState["name"]}</div> : null
                        }
                        
                    </div>
                    <div class="mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input name='email' type='email' placeholder='email@email.com' id="email" className="form-control" onChange={onChange} value={formState.email}/>
                        {
                            errorState.email ? <div className="invalid">{errorState["email"]}</div> : null
                        }
                    </div>
                    <div class="mb-3">
                        <label for="message" className="form-label">Your Message:</label>
                        <textarea name="message" type="text" placeholder="Your message" id="message" className="form-control" onChange={onChange} value={formState.message}></textarea>
                        {
                            errorState.message ? <div className="invalid">{errorState["message"]}</div> : null
                        }
                    </div>
                    
                    <input name="subject" value="Portfolio Message" type="hidden"/>
                    
                    <button className="btn sendBtn">Send Message</button>
                </form>
            </div>            
        </ContentContainer>
    )
}

export default Contact;