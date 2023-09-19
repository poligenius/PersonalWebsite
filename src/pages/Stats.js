import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about myself and my site"
  >
    <motion.article
      className="post"
      id="stats"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header>
        <div className="title">
          <h2><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <div className="markdown-container">
        <Personal />
        <Site />
      </div>
    </motion.article>
  </Main>
);

export default Stats;
