import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { motion } from 'framer-motion';
import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="About"
      description="Learn about Marco Marini"
    >
      <motion.article
        className="post markdown"
        id="about"
        initial={{ opacity: 0, duration: 2 }}
        animate={{ opacity: 1, duration: 2 }}
        exit={{ opacity: 0, duration: 2 }}
      >
        <header>
          <div
            className="title"
          >
            <h2><Link to="/about">About Me</Link></h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <div className="markdown-container">
          <Markdown>
            {markdown}
          </Markdown>
        </div>
      </motion.article>
    </Main>
  );
};

export default About;
