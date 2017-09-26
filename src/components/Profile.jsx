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
              Hello, and awesome to meet you. I am a full stack web developer currently looking for new opportunities. <br/>
              I have spent the last four months learning MEN stack, MERN stack, and React on Rails.  <br/>
              
            </IntroductionDiv> 
        </div>
              
        </div>
        
        );
      }
    }
    export default Profile;