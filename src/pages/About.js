import React from 'react';

const About = () => {
  return (
    <section className='section about-section'>
      <h1 className='section-title'>about us</h1>
      <p>
        This Cocktail DataBase was made in react by Vlasis as a practice
        project. Many thanks to my teacher John Smilga from Udemy's 'React
        Tutorial and Projects Course'.
      </p>
      <a
        className='about-link'
        href='https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA'
      >
        John's YouTube Page
      </a>
    </section>
  );
};

export default About;
