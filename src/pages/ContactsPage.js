import React from 'react';
import author from '../assets/img/author.jpeg'

const ContactsPage = () => {
    return (
        <div className="page contacts-page">

            <section>
                <div className="container">
                    
                    <div className="contacts-block">
                        <h2>My contacts</h2>
                        
                        <div className="contacts-img">
                            <img src={author} alt="Max Nyrkov"/>
                        </div>

                        <div className="contacts-item phone">
                            <h4>Phone</h4>
                            <p><a href="tel:+375445340362">+375 44 534-03-62</a></p>
                        </div>

                        <div className="contacts-item telega">
                            <h4>Telegram</h4>
                            <p><a href="https://t.me/nyrkov"  rel="noopener noreferrer" target="_blank">@nyrkov</a></p>
                        </div>

                        <div className="contacts-item linked">
                            <h4>LinkedIn</h4>
                            <p><a href="https://www.linkedin.com/in/maxon89/" rel="noopener noreferrer"  target="_blank">maxon89</a></p>
                        </div>
                    </div>
                    
                </div>
            </section>

        </div>
    );
};

export default ContactsPage;