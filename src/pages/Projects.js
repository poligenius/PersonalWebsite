import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ChatButton from '../components/Chat/ChatButton';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Marco Marini's projects."
  >
    <motion.article
      className="post"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>A selection of the projects that I&apos;m more proud of</p>
        </div>
      </header>
      <div className="markdown-container">
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </div>
    </motion.article>
    <ChatButton />
  </Main>
);

export default Projects;
