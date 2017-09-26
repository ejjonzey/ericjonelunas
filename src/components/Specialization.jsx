import React,{Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


class Specialization extends Component{
    render(){
        return(
            <div>
              <div>
                <img height='150' width='150' src={this.props.image}/>
                <h1>{this.props.language}</h1>
                <h3>{this.props.description}</h3>
            </div>
            </div>
        );
    }
}

export default Specialization;
