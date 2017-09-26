import React,{Component} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ProjectDiv = styled.div`
width: 30%;
margin: 20px 0; 
box-shadow: 1px 1px 5px black;
img {
  width: 100%;
}
h3{
  padding: 5px 0;
}
`;

class Project extends Component {
    render() {
        return (
            <ProjectDiv>
                <img  src={this.props.image}/>
                <h1>{this.props.title}</h1>
                <h3>{this.props.description}</h3>
                <h4><a href={this.props.deployedlink} alt="image" target="_blank">Deployed Link</a> </h4>   
                <h4><a href={this.props.githublink} alt="image" target="_blank">Git Hub Repo</a></h4>    
            </ProjectDiv>
        );
    }
}

export default Project;