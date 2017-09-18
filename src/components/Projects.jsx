import React, { Component } from 'react';
import Project from './Project';

const projects = [{
    project: 1,
    title: "WDI Blackjack Game",
    description: "A browser rendered blackjack game.  Made using HTML, CSS and JQuery.",
    deployedlink: "http://eric-jonelunas-blackjack.bitballoon.com/",
    githublink: "https://github.com/ejjonzey/blackjack-game",
    complete: true
},{
    project: 2,
    title: "WDI Adventure App",
    description: "A random adventure App written with Mongo, Express, and Node.",
    deployedlink: "https://sleepy-atoll-23923.herokuapp.com/",
    githublink: "https://github.com/ejjonzey/wdi-adventure-app",
    complete: true
},{
    project: 3,
    title: "Chain-Bangers",
    description: "A Disc Golf course tracker built with Mongo, Express, React, and Node.",
    deployedlink: "https://chain-bangers.herokuapp.com/",
    githublink: "https://github.com/ejjonzey/Chain-Bangers",
    complete: true
},{
    project: 4,
    title: "Vagabond: Project rover",
    description: "Project Rover is a travel app based on user submitted tips + suggestions.",
    deployedlink: "http://project-rover.herokuapp.com/",
    githublink: "https://github.com/ejjonzey/Vagabond-project",
    complete: true
},{
    project: 5,
    title: "iARTatl",
    description: "An App built with the idea of helping you keep track of all the murals in our city.",
    deployedlink: "https://iartatl.herokuapp.com/",
    githublink: "https://github.com/ejjonzey/IartATL",
    complete: true
}]

class Projects extends Component{
    render(){
        return(
             <div className="container" id="projects">
                 {projects.map((spec, i)=>{
                     return <Project key={i} project={spec.project} title={spec.title} description={spec.description} deployedlink={spec.deployedlink} githublink={spec.githublink} complete={spec.complete}/>
                 })}
             </div>
        )
    }
}
export default Projects;