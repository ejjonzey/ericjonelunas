import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AboutContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin-bottom: 25px;

p{
    font-size: 16px;
    font-family: 'Bitter';
    color: '#ffffff';
    @media(max-width: 410px){
        font-size: 15px;
    }
    @media(min-height: 900px){
        font-size: 27px;
    }
}

h2{
    font-size: 20px;
    font-family: 'Bitter';
    color: '#ffffff';
    @media: (max-width: 410px){
        font-size: 15px;
    }
}
background: url(http://www.sandiegoblackcarservice.com/wp-content/uploads/2016/06/san_diego-wallpaper-1920x1080.jpg) no repeat center center fixed;

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`

const GetToKnowMe = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;

    p{
        font-size: 5vw;
        font-family: 'Bitter';
        color: '#ffffff';
    }
`

const Picture = styled.div`
    img{
        width: 200px;
    }
`

const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        width: 50%;
        font-size: 15px;
        font-family: 'Cairo';
        color: '#ffffff';
        background: rgba(0,0,0,0.5);
        @media(max-width: 410px){
          width: 60%;
          font-size: 10px;  
    }
    @media(min-height: 900px){
        font-size: 20px;
    }
}
`

const Proficiencies = styled.div`
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-famiyl: 'Bitter';
        color: '#ffffff';
        @media: (max-width: 410px){
            font-size: 30px;
        }
        @media(min-height: 900px){
            font-size: 70px;
        }
    }
`

const ProTags1 = styled.div`
    display: flex;
    wrap: flex-wrap;
    justify-content: space-between;
    div{
        margin: 10px;
        padding: 10px;
        background: '#96edf4';
        color: '#f496be';
        font-family: 'Bitter';
        @media: (max-width: 410px){
            font-size: 10px;
            margin: 2px;
            padding: 2px;
        }
        @media(min-height: 900px){
            font-size: 15px;
            margin: 10px;
            padding: 10px;
        }
    }
`

const ProTags2 = styled.div`
    display: flex;
    wrap: flex-wrap;
    justify-content: space-between;
    div{
        margin: 10px;
        padding: 10px;
        background: '#96edf4';
        color: '#f496be';
        font-family: 'Bitter';
        @media: (max-width: 410px){
            font-size: 10px;
            margin: 2px;
            padding: 2px;
        }
        @media(min-height: 900px){
            font-size: 15px;
            margin: 10px;
            padding: 10px;
        }
    }
`



export default class About extends Component {
  render() {
    return (
      <AboutContainer>
          <GetToKnowMe className='Container'>
            <p>Eric Jonelunas</p>
          </GetToKnowMe>
      </AboutContainer>
    )
  }
}
