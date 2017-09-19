import React,{Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


class Specialization extends Component{
    render(){
        const Container = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        `
        return(
            <div>
              <Container>
                <img height='150' width='150' src={this.props.image}/>
                <h1>{this.props.language}</h1>
                <h3>{this.props.description}</h3>
            </Container>
            </div>
        );
    }
}

export default Specialization;
