import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import * as variables from '../../styles/variables'

const Result = styled.div`
margin-top: 1rem;
`
const BackText = styled.span`
margin-left: 1rem;
font-size: 1.2rem;
font-weight: 500;
`
const Title = styled.h1`
font-size: 2rem;
padding: .5rem;
text-align: center;
color: ${variables.colors.skyBlue};
`
const UpdatedWrap = styled.div`
font-size: 1.4rem;
margin-top: 2.5rem;
text-align: center;
`
const Here = styled.button`
margin-top: 1rem;
padding: .7rem 1.5rem;
border: .1rem solid ${variables.colors.black};
border-radius: .5rem;
cursor: pointer;
outline: none;
`
const BackBtn = styled.button`
padding: .5rem;
margin: 2rem;
border: none;
background: transparent;
outline: none;
cursor: pointer;
`


test('it works result', () => {
  const tree = renderer.create(<Result />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('it works backtext', () => {
    const tree = renderer.create(<BackText />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works title', () => {
    const tree = renderer.create(<Title />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works here', () => {
    const tree = renderer.create(<Here />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works updatedwrap', () => {
    const tree = renderer.create(<UpdatedWrap />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('it works backbtn', () => {
    const tree = renderer.create(<BackBtn />).toJSON()
    expect(tree).toMatchSnapshot()
})