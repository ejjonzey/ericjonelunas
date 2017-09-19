import React,{Component} from 'react';
import { Link } from "react-router-dom";
import projects from './Projects';


class Project extends Component {
    constructor(){
        super();
        this.state={
            project: {
                title: '',
                description: '',
                deployedlink: '',
                githublink: ''
            }
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.description}</h3> 
                <Link to={this.props.deployedlink}/>  
            </div>
        );
    }
}

export default Project;