import React from "react";
import styled from 'styled-components'; //download with :  yarn add styled-components (must in same folder!)
import './hello.css'

function Hello(){ //start component name with big letter
    const StyledButton = styled.button` 
        color:red;
        background-color:black;
        padding:10%;
        border:solid;
        margin-top:5%;
    `

    const PracticeStyle = {
        marginTop: '10px',
        marginLeft: '10px',
        backgroundColor: 'blue',

    };
    return ( //not curly bracket
        <>
            <div style = {PracticeStyle}><strong>Hello World!!</strong></div>
            <div style = {PracticeStyle}><strong>Hello World!!</strong></div>
            <div style = {PracticeStyle}><strong>Hello World!!</strong></div>
            <div style = {PracticeStyle}><strong>Hello World!!</strong></div>
            <div style = {PracticeStyle}><strong>Hello World!!</strong></div>
            <div className = 'red'><strong>Hello World!!</strong></div>
            <div><StyledButton>My button</StyledButton></div>
        </>
    );
}

export default Hello;
