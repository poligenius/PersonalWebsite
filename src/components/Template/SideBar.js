import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2 style={{ color: '#ffffff' }}>Marco Marini</h2>
        <p style={{ color: '#ffffff' }}><a href="mailto:marco.97marini@gmail.com">marco.97marini@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2 style={{ color: '#ffffff' }}>About</h2>
      <p style={{ color: '#ffffff' }}>Hi, I&apos;m Marco. I am a <a href="https://www.polimi.it/corsi/corsi-di-laurea-magistrale/M/2022-ing-ind-inf-magord-270-mi-481-computer-science-and-engineering-ingegneria-informatica">Politecnico</a> graduate
        and the AI and ML Engineer at <a href="https://www.pwc.com/it/it/">PwC</a>.
        Please feel free to browse through the various sections of the site to get to know me
        better.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button" style={{ color: '#ffffff', border: '1px solid #ffffff' }}>Learn More</Link>
          ) : (
            <Link to="/about" className="button" style={{ color: '#ffffff', border: '1px solid #ffffff' }}>About Me</Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright" style={{ color: '#ffffff' }}>&copy; Marco Marini <Link to="/">mmarini.com</Link></p>
    </section>
  </section>
);

export default SideBar;
