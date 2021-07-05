// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    border: 2px solid maroon;
    width: 50%;
    padding: 1%;
    margin: 1% auto;
    font-size: .6rem;
`

const Character = (props) => {
    //console.log(props)

    return( 
        <Container>
            <h1> Name: {props.name} </h1>
            <h2> Gender: {props.gender} Height: {props.height} lbs</h2>
            <h3> Included in {props.films.length} films </h3>
        </Container>
    )
}

export default Character;