import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';

import data from '../data/contact';

import '../static/css/layout/_footer.scss';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link}>
          <FontAwesomeIcon icon={s.icon} className="icon-custom-color-md" />
        </a>
      </li>
    ))}
  </ul>
);

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Marco Marini via email marco.97marini@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
