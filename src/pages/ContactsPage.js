import React from 'react';
import author from '../assets/img/author.jpeg';
import {
  AUTHOR_LINKEDIN_LINK,
  AUTHOR_LINKEDIN_NICK,
  AUTHOR_NAME,
  AUTHOR_PHONE,
  AUTHOR_TELEGRAM_LINK,
  AUTHOR_TELEGRAM_NICK,
} from '../constants/constants';

const ContactsPage = () => {
  return (
    <div className="page contacts-page">
      <section>
        <div className="container">
          <div className="contacts-block">
            <h2>My contacts</h2>

            <div className="contacts-img">
              <img src={author} alt={AUTHOR_NAME} />
            </div>

            <div className="contacts-item phone">
              <h4>Phone</h4>
              <p>
                <a href={'tel:' + AUTHOR_PHONE}>{AUTHOR_PHONE}</a>
              </p>
            </div>

            <div className="contacts-item telega">
              <h4>Telegram</h4>
              <p>
                <a href={AUTHOR_TELEGRAM_LINK} rel="noopener noreferrer" target="_blank">
                  {AUTHOR_TELEGRAM_NICK}
                </a>
              </p>
            </div>

            <div className="contacts-item linked">
              <h4>LinkedIn</h4>
              <p>
                <a href={AUTHOR_LINKEDIN_LINK} rel="noopener noreferrer" target="_blank">
                  {AUTHOR_LINKEDIN_NICK}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
