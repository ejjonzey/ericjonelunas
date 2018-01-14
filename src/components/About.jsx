import React from 'react';
import LazyLoad from 'react-lazy-load';

const About = () => (
  <section className='about'>
    <h2 className='heading'>
      About<LazyLoad height={15}><hr className='divider' /></LazyLoad>
    </h2>
    <div className='content'>
      <div className='portrait-container'>
        <LazyLoad height={280} offset={100}>
          <div className='portrait' />
        </LazyLoad>
      </div>
      <div className='bio'>
        <p>
          Full stack developer, graduate from General Assembly (Web Development Immersive), and problem solver.
          Avid Disc golfer, and outdoor enthusiast.  I want to help build applications that makes peoples lives 
          easier.  I create functional and appealing sites.  I love learining new technologies to futher that goal.
        </p>
        <br />
        <p>
          I am also about to be a Father.  I cannot wait to meet my child.
        </p>
      </div>
    </div>
    <div className='triangle'></div>
  </section>
)

export default About