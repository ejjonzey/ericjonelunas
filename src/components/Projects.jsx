import React, { Component } from 'react';
import Project from './Project';
import styled from 'styled-components';
import ReactRevealText from 'react-reveal-text';


const projects = [{
    project: 1,
    title: "WDI Blackjack Game",
    description: "A browser rendered blackjack game.  Made using HTML, CSS and JQuery.",
    deployedlink: "http://eric-jonelunas-blackjack.bitballoon.com/",
    githublink: "https://github.com/ejjonzey/blackjack-game",
    image: "https://i.imgur.com/DdFCPmV.png",
    complete: true
},{
    project: 2,
    title: "WDI Adventure App",
    description: "A random adventure App written with Mongo, Express, and Node.",
    deployedlink: "https://sleepy-atoll-23923.herokuapp.com/",
    githublink: "https://github.com/ejjonzey/wdi-adventure-app",
    image: "https://i.imgur.com/B28UN9u.png",
    complete: true
},{
    project: 3,
    title: "Chain-Bangers",
    description: "A Disc Golf course tracker built with Mongo, Express, React, and Node.",
    deployedlink: "https://chain-bangers.herokuapp.com/",
    githublink: "https://github.com/ejjonzey/Chain-Bangers",
    image: "https://i.imgur.com/vkLKC8B.png",
    complete: true
},{
    project: 4,
    title: "Vagabond: Project rover",
    description: "Project Rover is a travel app based on user submitted tips  suggestions.",
    deployedlink: "http://project-rover.herokuapp.com/",
    githublink: "https://github.com/ejjonzey/Vagabond-project",
    image: "https://i.imgur.com/ucYi7al.png",
    complete: true
},{
    project: 5,
    title: "iARTatl",
    description: "An App built with the idea of helping you keep track of all the murals in our city.",
    deployedlink: "https://iartatl.herokuapp.com/",
    githublink: "https://github.com/ejjonzey/IartATL",
    image: "https://i.imgur.com/fKWlV03.png",
    complete: true
}]

class Projects extends Component{
    constructor() {
        super();
        this.state = { show: false };
      }

      
    
      componentDidMount() {
        setTimeout(() => {
          this.setState({ show: true });
        }, 1000);
      }
      
    render(){
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
        };
        const bodyStyles = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            flexDirection: 'row',
            textAlign: 'center',
        };
        return (
        <div style={bgStyles}>
        <div style={textStyles}>
        <div style={bodyStyles}>
                {projects.map((spec, i)=>{
                     return <Project key={i} project={spec.project} title={spec.title} description={spec.description} deployedlink={spec.deployedlink} githublink={spec.githublink} image={spec.image} complete={spec.complete}/>
                })}
        </div>
    </div>
</div>         
        )
    }
}
export default Projects;