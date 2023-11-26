import React from "react";
import insta from  '../assets/instragram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import whatsapp from '../assets/whatsapp.svg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="header">
                <div>
                <h1>Say hello  today!</h1>
                <p>Share your needs, and let's turn your ideas into reality! <br />
                    We're here to talk, understand, and leverage your vision for a personalized and impactful collaboration.</p>
                </div>
            </div>
            <div className="main">
                <div>
                <h2>We're eager to hear from you!</h2>
                <p>Got an enquiry? an idea?
                    got a burning question or just 
                    want to say 'hi'? Our inbox is ready 
                    for your antics - hit us up, and let 
                    the laughter (and conversation) begin!</p>
                </div>
            </div>
            <div className="main2">
                <h2>CONTACT US</h2>
                <div className="email">
                <h3>desbeyondglobal@gmail.com</h3>
                <p>+91 95517 58115 | +91 87540 66170 | +91 80155 31319</p>
                </div>
                <div className="icons">
                    <img src={facebook} alt="facebook" />
                    <img src={insta} alt="instragram" />
                    <img src={twitter} alt="twitter" />
                    <img src={whatsapp} alt="whatsapp" />
                    <p>All rights reserved by Desbeyond</p>
                </div>
            </div>
        </div>
    )
}

export default Contact