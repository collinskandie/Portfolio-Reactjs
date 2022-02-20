import "./contact.css"
// import Phone from "../../img/Phone.png"
// import Email from "../../img/email.png"
// import Phone from "../../img/phone.pg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeOpenText, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div className="c">
        <div className="c-bg">
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
                    <a href="mailto:collinskandie1@gmail.com">collinskandie1@gmail.com</a>                   
                    </div>
                </div>
            </div>
            <div className="c-right"></div>
        </div>
        </div>


        </div>
    )
}
export default Contact