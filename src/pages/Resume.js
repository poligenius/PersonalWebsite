import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import ChatButton from '../components/Chat/ChatButton';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import Certifications from '../components/Resume/Certifications';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';
import certifications from '../data/resume/certifications';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Certifications: () => <Certifications data={certifications} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Marco Marini's resume."
  >
    <motion.article
      className="post"
      id="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <div className="resume-container">
        {Object.entries(sections).map(([name, Section]) => (
          <Section key={name} />
        ))}
      </div>
    </motion.article>
    <ChatButton />
  </Main>
);

export default Resume;
