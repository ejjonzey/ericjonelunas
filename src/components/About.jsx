import React, {component} from 'react';
import styled from 'styled-components';
import {link} from 'react-router-dom';

const AboutContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin-bottom: 25px;

p{
    font-size: 22px;
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
background: url('https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAA0VAAAAJDFmMzU5YTk2LTA5OWYtNGVkNC05YTRmLTcyNzM5ZDY5MTA5Zg.jpg')

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`

