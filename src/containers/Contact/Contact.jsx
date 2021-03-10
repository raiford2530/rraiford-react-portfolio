import ContentContainer from "../ContentContainer/ContentContainer";
import Header from "../../components/Header/Header";
import 'font-awesome/css/font-awesome.min.css';
import './contact.css';
import emailjs from 'emailjs-com';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';

function Contact(){

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormState({...formState, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        /*
        User ID
user_9GBgtM8NEXmZvD3BloSBJ
Access Token
886c43f65c4e2b9a9dfbba2f23f7b7c9
        */
        const userid = 'user_9GBgtM8NEXmZvD3BloSBJ';
        const token = '886c43f65c4e2b9a9dfbba2f23f7b7c9'
        emailjs.sendForm('portfolio-email', 'portfolio', e.target, userid)
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
                <form onSubmit = {onSubmit} className="w-50">
                    <div class="mb-3">
                        <label for="name" className="form-label">Name:</label>
                        <input name='name' type='text' placeholder='Name' id="name" className="form-control" onChange={onChange} value={formState.name}/>
                    </div>
                    <div class="mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input name='email' type='email' placeholder='email@email.com' id="email" className="form-control" onChange={onChange} value={formState.email}/>
                    </div>
                    <div class="mb-3">
                        <label for="message" className="form-label">Your Message:</label>
                        <textarea name="message" type="text" placeholder="Your message" id="message" className="form-control" onChange={onChange} value={formState.message}></textarea>
                    </div>
                    
                    <input name="subject" value="Portfolio Message" type="hidden"/>
                    
                    <button className="btn btn-light">Send Message</button>
                </form>
            </div>            
        </ContentContainer>
    )
}

export default Contact;