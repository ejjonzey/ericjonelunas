import React,{Component} from 'react';
import { Link } from "react-router-dom";


class Project extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.description}</h3>
            <h4><a href={this.props.deployedlink} alt="image" target="_blank">Vist this site</a> </h4>   
            <h4><a href={this.props.githublink} alt="image" target="_blank">Vist this site's repo</a></h4>    
            </div>
        );
    }
}

export default Project;