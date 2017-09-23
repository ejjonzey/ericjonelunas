
import React,{Component} from 'react';
import { Link } from "react-router-dom";


class Project extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.description}</h3>
            <a href={this.props.deployedlink} target="_blank">test</a>    
            </div>
        );
    }
}

export default Project;