import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Marco Marini</h2>
        <p><a href="mailto:marco.97marini@gmail.com">marco.97marini@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Marco. I am a <a href="https://www.polimi.it/corsi/corsi-di-laurea-magistrale/M/2022-ing-ind-inf-magord-270-mi-481-computer-science-and-engineering-ingegneria-informatica">Politecnico</a> graduate
        and the AI and ML Engineer at <a href="https://www.pwc.com/it/it/">PwC</a>.
        Please feel free to browse through the various sections of the site to get to know me
        better.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Marco Marini <Link to="/">mmarinicom</Link>.</p>
    </section>
  </section>
);

export default SideBar;
