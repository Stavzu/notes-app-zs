import styled from 'styled-components'
import * as variables from '../../styles/variables'

export const Title = styled.h1`
font-size: 2rem;
padding: 0.5rem;
text-align: center;
color: ${variables.colors.skyBlue};
`
export const UpdatedWrap = styled.div`
font-size: 1.4rem;
margin-top: 2.5rem;
text-align: center;
color: ${variables.colors.strawberry};
`
export const Here = styled.button`
margin-top: 1rem;
padding: 0.7rem 1.5rem;
border: 1px solid ${variables.colors.black};
border-radius: 0.5rem;
cursor: pointer;
outline: none;
`
export const Result = styled.div`
margin-top: 1rem;
color: ${variables.colors.shark};
`
export const BackText = styled.span`
margin-left: 1rem;
font-size: 1.2rem;
font-weight: 500;
`
export const BackBtn = styled.button`
padding: 0.5rem;
margin: 2rem;
border: none;
background: transparent;
outline: none;
cursor: pointer;
`
export const DeletePart = styled.div`
text-align: center;
display: grid;
font-size: 1.5rem;
margin-top: 6rem;
`
export const Ask = styled.span`
text-align: center;
color: ${variables.colors.shark};
font-size: 1.5rem;
margin-bottom: 1rem;
`
export const Required = styled.div`
color: ${variables.colors.strawberry};
width: 50%;
margin: 0 auto;
justify-content: flex-end;
display: flex;
text-align: right;
font-size: 1.2rem;
`
export const Container = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
padding: 0.5rem;
margin: 0 auto;
position: relative;
border-radius: 0.2rem;
box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.11);
margin-bottom: 0.6rem;
box-sizing: border-box;
transition: all .4s ease;
`
export const Name = styled.div`
font-size: 1.2rem;
margin-bottom: 1rem;
color: #333;
`
export const Arrow = styled.div`
text-align: center;
font-size: 2rem;
cursor: pointer;
width: 10%;
height: 3rem;
line-height: 2;
`
export const Note = styled.div`
line-height: 2;
margin-left: 1rem;
&:hover {
  color: ${variables.colors.skyBlue};
  }
${({ active }) => active && `
  color: ${variables.colors.skyBlue};
  `}
`
export const WrapDate = styled.div`
display: flex;
justify-content: flex-end;
align-self: flex-end;
position: relative;
top: 2rem;
`
export const ItemDate = styled.span `
font-size: 1.2rem;
margin: 0 0.2rem 0 0;
`
export const BoxTop = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`
export const Personal = styled.div`
padding: 1rem;
`
export const ItemTitle = styled.span`
min-width: 15rem;
`
export const Item = styled.div`
display: flex;
margin: 0.5rem;
font-size: 1.4rem;
`