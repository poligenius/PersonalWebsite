import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Marco Marini's personal website. Milan based Politecnico graduate, "
    + 'Machine Learning and AI engineer at PwC.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p> Welcome. Please feel free to explore my personal site and get to know me better.
        Here I have curated a collection
        of <Link to="/about">my passions</Link>, <Link to="/resume">working experiences</Link> and <Link to="/projects">projects</Link>, giving
        you a glimpse into my life.
        Don&apos;t forget also to check <Link to="/stats">site statistics</Link> and
        my <Link to="/contact">contacts</Link>.
        Hope you&apos;ll enjoy the site!
      </p>
      <p> Source code available <a href="https://github.com/poligenius/PersonalWebsite">here</a>.</p>
    </article>
  </Main>
);

export default Index;
