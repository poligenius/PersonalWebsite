import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ChatButton from '../components/Chat/ChatButton';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Marco Marini's personal website. Milan based Politecnico graduate, "
    + 'Machine Learning and AI engineer at PwC.'}
  >
    <motion.article
      className="post"
      id="index"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p> Welcome. Please feel free to explore my personal site and get to know me better.
        Here I have curated a collection
        of <Link to="/about">my passions</Link>, <Link to="/resume">working experiences</Link> and <Link to="/projects">projects</Link>, giving
        you a glimpse into my life.
        Don&apos;t forget also to check <Link to="/stats">site statistics</Link>,
        my <Link to="/contact">contacts</Link> and, if you have time to waste, have fun in visiting my <Link to="/gallery">gallery</Link>!
        Hope you&apos;ll enjoy the site.
      </p>
      <p>Don&apos;t have time to explore the site? It&apos;s fine, download my compact resume by
        clicking below, or ask whatever you want to know to my virtual assistant!
      </p>
      <p>
        <a href="/MarcoMarini_resume.pdf" download>
          <button type="button" style={{ background: '#ffffff', border: '1px solid #ffffff' }}>Download Resume</button>
        </a>
      </p>
      <p> Site&apos;s source code available <a href="https://github.com/poligenius/PersonalWebsite">here</a>.</p>
    </motion.article>
    <ChatButton />
  </Main>
);

export default Index;
