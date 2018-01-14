import React from 'react'
import LazyLoad from 'react-lazy-load'

const resume = require('../Media/Resume.pdf')

const Skills = () => (
  <section className='skills'>
    <h2 className='heading'>
      Skills<LazyLoad height={15}><hr className='divider' /></LazyLoad>
    </h2>
    <div className='content'>
      <div className='langs'>
        <div className='left'>
          <LazyLoad height={100}><span className='html-icon' /></LazyLoad>
          <h5>HTML5</h5>
          <h6>Accessibility</h6>
          <h6>XHTML</h6>
        </div>
        <div className='middle'>
          <LazyLoad height={100}><span className='js-icon' /></LazyLoad>
          <h5>JavaScript</h5>
          <h6>React / JSX</h6>
          <h6>ES6</h6>
          <h6>Phaser</h6>
        </div>
        <div className='right'>
          <LazyLoad height={100}><span className='css-icon' /></LazyLoad>
          <h5>CSS3</h5>
          <h6>SASS / SCSS</h6>
          <h6>Semantic UI</h6>
          <h6>Bootstrap</h6>
        </div>
      </div>
      <div className='other'>
        <div className='tools'>
          <LazyLoad height={100}><span className='tools-icon' /></LazyLoad>
          <h5>Tools</h5>
          <h6>Photoshop</h6>
          <h6>Terminal</h6>
          <h6>React Router</h6>
          <h6>Firebase</h6>
          <h6>Chrome DevTools</h6>
          <h6>Jekyll</h6>
        </div>
        <div className='misc'>
          <LazyLoad height={100}><span className='puzzle-icon' /></LazyLoad>
          <h5>Misc</h5>
          <h6>Responsive Design</h6>
          <h6>Progressive Web Apps</h6>
          <h6>Single Page Apps</h6>
          <h6>Git</h6>
        </div>
        <div className='academic'>
          <LazyLoad height={100}><span className='academic-icon' /></LazyLoad>
          <h5>University Education</h5>
          <h6>Python</h6>
          <h6>C / C++</h6>
          <h6>Mathematica</h6>
          <h6>Java</h6>
        </div>
      </div>
      <div className='download-container'>
        <a
          className='download-link'
          href={resume}
          download='Jose-Dario-Sanchez-(resume).pdf'
        >
          <button className='download-button'>Download Resume</button>
        </a>
      </div>
    </div>
    <div className='triangle'></div>
  </section>
)

export default Skills