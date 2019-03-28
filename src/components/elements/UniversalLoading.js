import React from 'react';
import styled from 'styled-components'
import * as variables from '../../styles/variables'

const UniversalLoading = () => {
    return (
        <LoadingWrap>
            <Spiner />
        </LoadingWrap>
    );
};

export default UniversalLoading;

const LoadingWrap = styled.div`
width: 100%;
text-align: center;
`
const Spiner = styled.div`
animation: spin 1s linear infinite;
-webkit-animation: spin 1s linear infinite;
border: .3rem, solid #ddd;
border-top: .3rem solid ${variables.colors.skyBlue};
border-radius: 50%;
height: 7,5rem;
width: 7.5rem;
margin: 0 auto;
`

