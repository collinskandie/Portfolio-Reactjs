import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeOpenText, faLink, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef= useRef();
    const [done,setDone] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_9d95q7b', 'template_9j195e4', formRef.current, 'Yek7U9wnGpr-aDa3W').then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Lets get in touch</h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <FontAwesomeIcon icon={faPhoneSquare} className="c-icon"/>
                    +2547 22545735                    
                    </div>
                    <div className="c-info-item">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="c-icon"/>
                    <a href="mailto:collinskandie1@gmail.com">Send an Email</a>
                    </div>
                    <div className="c-info=item">
                    <FontAwesomeIcon icon={faLink} className="c-icon" />
                    <a href="https://www.linkedin.com/in/collins-kiptoo-0929b81aa/">Collins Kipruto</a>
                    </div>
                    
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                <b>Whats your project?</b> Get in touch. I would like you to be my next happy and satisfied client
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="username"/>
                    <input type="text" placeholder="Email" name="email"/>
                    <input type="text" placeholder="Subject" name="subject"/>
                    <textarea rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button> 
                    {done && "Thank you for your feedback, will get back to you soon."}
               </form>
            </div>
        </div>       
        </div>
    )
}
export default Contact