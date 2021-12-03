import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
            <div className="contact-page">
                <h1 className="contact-header">Contact</h1>
                <div className="msg-section">
                    <h4>If you want to enquire about getting a putter restored.<br />  
                    Please send and email, and we will get back to you in a timely manner. -NGC</h4>
                </div>
                <form name="contact" method="POST" data-netlify="true" netlify className="email-section">
                    <h3 className="email">Email</h3>
                    <input name="contact" className="email-input"></input>
                    <h3 className="email-msg">Message</h3>
                    <textarea name="contact" className="text-area"></textarea>
                    <button type="submit" className="contact-btn">Send</button>
                </form>
                <div className="vendor-secton">
                    <hr></hr>
                    <p className="vendor">Companies</p>
                    <div className="company-section">
                    <div className="first-companies">
                    <a className="vendor-link" href="https://www.scottycameron.com" target="_blanket">Scotty Cameron</a><br/>
                    <a className="vendor-link" href="https://www.odysseygolf.com" target="_blanket">Odyssey</a><br/>
                    <a className="vendor-link" href="https://www.ping.com" target="_blanket">Ping</a><br/>
                    <a className="vendor-link" href="https://www.titleist.com" target="_blanket">Titleist</a><br />
                    </div>
                    <div className="second-companies">
                    <a className="vendor-link" href="https://www.taylormadegolf.com" target="_blanket">TaylorMade</a><br/>
                    <a className="vendor-link" href="https://www.callaway.com" target="_blanket">Callaway</a><br/>
                    <a className="vendor-link" href="https://www.mizunogolf.com" target="_blanket">Mizuno</a><br/>
                    <a className="vendor-link" href="https://www.clevelandgolf.com" target="_blanket">Cleveland</a><br/>
                    </div>

                    </div>
                </div>
            </div>
    )
}
