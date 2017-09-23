import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Profile extends Component{
    render(){

        const TitleDiv = styled.div`
        display: flex;
        flex-direction: column;
        height: 95vh;
        justify-content: center;
        align-items: center;
        background-color: #66CCFF;
        background-image: url("");
        background-repeat: no-repeat;
        background-position: center;
        h1{
            color: #8b008b;
        }
`
        return(
            <div>
         <TitleDiv>
          <h1>Eric Jonelunas</h1>
          <h1>Full Stack Web Developer</h1>
         </TitleDiv>
          </div>
        );
    }
}

export default Profile;