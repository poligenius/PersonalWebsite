import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ChatButtonHome from '../components/Chat/ChatButtonHome';

import Main from '../layouts/Main';

const Index = () => {
  const handleDownload = async () => {
    // This method ensures the download action occurs directly and is less likely ù
    // to be blocked by browsers.
    window.location.href = '/MarcoMarini_resume.pdf';
    try {
      const response = await fetch('/.netlify/functions/emailSender', {
        method: 'POST',
        body: JSON.stringify({ emailText: 'Qualcuno ha appena scaricato il tuo cv.' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await response.json();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Main
      description={"Marco Marini's personal website. Milan based Politecnico graduate, "
          + 'Tech Product Owner at Mediaset.'}
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
          <button type="button" style={{ background: '#ffffff', border: '1px solid #ffffff' }} onClick={handleDownload}>Download Resume</button>
        </p>
        <p> Site&apos;s source code available <a href="https://github.com/poligenius/PersonalWebsite">here</a>.</p>
      </motion.article>
      <ChatButtonHome />
    </Main>
  );
};

export default Index;
