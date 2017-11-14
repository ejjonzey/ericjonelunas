import React, { Component } from 'react';
import styled from 'styled-components';
import ReactRevealText from 'react-reveal-text';
import Img from 'react-image'

const SplashImage = styled.div`

`

const IntroductionDiv = styled.div`
  display: flex,
  flex-direction: column;
  flex-wrap: wrap;
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
                 Hi!  I am a full stack web developer based in Atlanta.  I focus on creating quick and responsive applications that make use of the latest technologies available.
                 Throughout my entire career I have worked in fields with project completion goals.  I want to continue to work under these conditions, but also contribute something new to society.  Web development has allowed me learn of new areas that I have started to focus on.  Accessability for users with unique challenges for each of them has unlimited possibilities for new solutions.
            </IntroductionDiv> 
        </div>
              
        </div>
        
        );
      }
    }
    export default Profile;