import styled from 'styled-components'
import * as variables from '../../../styles/variables'

const Textarea = styled.textarea`
display: flex;
width: 50%;
overflow-y: scroll;
height: 5rem;
margin: 0 auto;
padding: 0.5rem;
font-size: 1.4rem;
margin-top: 1rem;
border: none;
border-bottom: .1rem solid ${variables.colors.black};
&:hover  {
        border-bottom: .2rem solid ${variables.colors.skyBlue};
    }
`

export default Textarea