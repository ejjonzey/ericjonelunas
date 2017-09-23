import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: [{
                project: 1,
                title: "WDI Blackjack Game",
                imageUrl: "https://i.imgur.com/DdFCPmV.png",
                description: "A browser rendered blackjack game.  Made using HTML, CSS and JQuery.",
                deployedlink: "http://eric-jonelunas-blackjack.bitballoon.com/",
                githublink: "https://github.com/ejjonzey/blackjack-game",
                complete: true
            },{
                project: 2,
                title: "WDI Adventure App",
                imageUrl: "https://i.imgur.com/B28UN9u.png",
                description: "A random adventure App written with Mongo, Express, and Node.",
                deployedlink: "https://sleepy-atoll-23923.herokuapp.com/",
                githublink: "https://github.com/ejjonzey/wdi-adventure-app",
                complete: true
            },{
                project: 3,
                title: "Chain-Bangers",
                imageUrl: "https://i.imgur.com/vkLKC8B.png",
                description: "A Disc Golf course tracker built with Mongo, Express, React, and Node.",
                deployedlink: "https://chain-bangers.herokuapp.com/",
                githublink: "https://github.com/ejjonzey/Chain-Bangers",
                complete: true
            },{
                project: 4,
                title: "Vagabond: Project rover",
                imageUrl: "https://i.imgur.com/ucYi7al.png",
                description: "Project Rover is a travel app based on user submitted tips + suggestions.",
                deployedlink: "http://project-rover.herokuapp.com/",
                githublink: "https://github.com/ejjonzey/Vagabond-project",
                complete: true
            },{
                project: 5,
                title: "iARTatl",
                imageUrl: "https://i.imgur.com/fKWlV03.png",
                description: "An App built with the idea of helping you keep track of all the murals in our city.",
                deployedlink: "https://iartatl.herokuapp.com/",
                githublink: "https://github.com/ejjonzey/IartATL",
                complete: true
    }]
}
    }
    render() {
        return (
            <div id="Projects">
            
            <StyleRoot>
            <h3>Personal Projects</h3>
                <Coverflow
                        media={{
                            '@media (max-width: 900px)': {
                                width: '90%',
                                height: '300px'
                            },
                            '@media (min-width: 900px)': {
                                width: '90%',
                                height: '600px'
                            }
                            }}
                        displayQuantityOfSide={1}
                        navigation={true}
                        enableHeading={false}
                        active={this.state.active} >
                    {this.state.projects.map((project, index) => (
                    <div key={index}>
                            <a href={this.state.imgUrl} width="100%" />
                            <div className="project-list">{project.title}</div>
                    </div>
                    ))} 
                    </Coverflow>
                    </StyleRoot>
            </div>
        );
    }
}

export default Projects;