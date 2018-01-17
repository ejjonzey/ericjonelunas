import React, { Component } from 'react';
import styled from 'styled-components';
import ReactRevealText from 'react-reveal-text';
import Img from 'react-image'

const SplashImage = styled.div`
`

const IntroductionDiv = styled.div`
  display: flex,
  flex-direction: column;
  text-align: center;
  color: white;
`


class Profile extends Component {
    constructor() {
        super();
        this.state = { show: false };
      }

      
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({ show: true });
        }, 1000);
      }
    
      render() {
        const bgStyles = {
          background: 'linear-gradient(135deg, #66CCFF, #000000)',
          padding: '36px',
        };
        const textStyles = {
          color: 'white',
          fontSize: '24px',
          lineHeight: '36px',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          letterSpacing: '1em',
          paddingLeft: '1em', // to compensate for letter spacing
        };
       
        return (
            <div>
          <div style={bgStyles}>
            <div style={textStyles}>
            <SplashImage>
            <img src={'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAA0VAAAAJDFmMzU5YTk2LTA5OWYtNGVkNC05YTRmLTcyNzM5ZDY5MTA5Zg.jpg'}></img>
            </SplashImage>
            <ReactRevealText show={this.state.show} text="Eric Jonelunas" />
            <ReactRevealText show={this.state.show} text="Web Developer" />
            <ReactRevealText show={this.state.show} text="Disc Golfer" /> <br/>
            </div>        
            <IntroductionDiv>
            Full stack developer, graduate from General Assembly (Web Development Immersive), and problem solver.
            Avid Disc golfer, and outdoor enthusiast.  I want to help build applications that makes peoples lives 
            easier.  I create functional and appealing sites.  I love learining new technologies to futher that goal.        
            </IntroductionDiv> 
        </div>
              
        </div>
        
        );
      }
    }
    export default Profile;

// import React from 'react';
// import LazyLoad from 'react-lazy-load';

// const About = () => (
//   <section className='about'>
//     <h2 className='heading'>
//       About<LazyLoad height={15}><hr className='divider' /></LazyLoad>
//     </h2>
//     <div className='content'>
//       <div className='portrait-container'>
//         <LazyLoad height={280} offset={100}>
//           <div className='portrait' />
//         </LazyLoad>
//       </div>
//       <div className='bio'>
//         <p>
//           Full stack developer, graduate from General Assembly (Web Development Immersive), and problem solver.
//           Avid Disc golfer, and outdoor enthusiast.  I want to help build applications that makes peoples lives 
//           easier.  I create functional and appealing sites.  I love learining new technologies to futher that goal.
//         </p>
//         <br />
//         <p>
//           I am also about to be a Father.  I cannot wait to meet my child.
//         </p>
//       </div>
//     </div>
//     <div className='triangle'></div>
//   </section>
// )

// export default About