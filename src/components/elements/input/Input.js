import styled from 'styled-components'
import * as variables from '../../../styles/variables'

const Input = styled.input`
display: flex;
width: 50%;
margin: 0 auto;
font-size: 1.4rem;
padding: .5rem;
margin-top: 1rem;
outline: none;
border: none;
border-bottom: .1rem solid ${variables.colors.black};
&:hover  {
        border-bottom: .2rem solid ${variables.colors.skyBlue}
    }
`

export default Input