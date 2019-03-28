import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as variables from '../../styles/variables'
import FontAwesome from 'react-fontawesome'

const Button = (props) => {
    let template = null;
    switch(props.type) {
        case 'toEdit':
        template = (
             <Link to={`/notes/edit/${props.noteId}`}>
                <BtnCicle> <FontAwesome name={props.icon} /></BtnCicle>
            </Link> 
        )
        break;
        case 'editNote':
        template = (
                <Btn><Submit type="submit" disabled={props.disabled}>{props.text}</Submit></Btn>
        )
        break;
        case 'delete':
        template = (
                <BtnNarrow onClick={props.deleteNote}>{props.text}</BtnNarrow>
        )
        break;
        case 'addNote':
        template = (
            <Btn><Submit type="submit" disabled={props.disabled}>{props.text}</Submit></Btn>
        )
        break;
        default: 
        template = null
    }
    return template
};

export default Button;


const Btn = styled.div`
text-align: center;
background: ${variables.colors.skyBlue};
border-bottom: .1rem solid ${variables.colors.silver};
color: ${variables.colors.white};
display: inline-block;
padding: .5rem;
cursor: pointer;
font-size: 1.2rem;
width: 20rem;
position: relative;
left: 50%;
transform: translateX(-50%);
border-radius: .5rem;
margin-top: 2rem;
`
const BtnCicle = styled.div`
width: 4rem;
height: 4rem;
background-color: ${variables.colors.skyBlue};
border: 0;
padding: 0;
box-shadow: 0 .6rem .9rem 0 rgba(0, 0, 0, 0.15);
border-radius: 50%;
bottom: 2.4rem;
line-height: 2.5;
text-align: center;
color: ${variables.colors.white};
outline: none;
`
const BtnNarrow = styled.div`
text-align: center;
background: ${variables.colors.skyBlue};
border-bottom: .1rem solid ${variables.colors.silver};
color: ${variables.colors.white};
padding: 0.5rem;
cursor: pointer;
font-size: 1.2rem;
width: 10rem;
position: relative;
left: 50%;
transform: translateX(-50%);
border-radius: .5rem;
margin-top: 1rem;
`
const Submit = styled.button `
background: transparent;
border: none;
outline: none;
color: ${variables.colors.white};
cursor: pointer;
font-weight: 800;
`
const Text = styled.div`
display: block;
margin-bottom: .3rem;
color: ${variables.colors.white};
`
