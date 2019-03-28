import React, { Component } from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import SideNav from './SideNav'
import {  withTranslation } from 'react-i18next'
import IconPlus from '../../components/elements/icons/IconPlus'
import * as variables from '../../styles/variables'
import PropTypes from 'prop-types'


class Header extends Component {
  state = {
    activeCz: false,
    activeEn: true,
  }
    
     navBar = (props) => (
        <Hamburger>
            <FontAwesome  
                onClick={props.onShowNav} 
                name='bars' 
                style={{color: `${variables.colors.silver}`, padding: '1rem', cursor: 'pointer'}} />
        </Hamburger>
    ) 

  render() {
    const { t, i18n } = this.props;
    const {activeCz, activeEn} = this.state;

    const changeLanguage = (lng, activeCz) => {
      i18n.changeLanguage(lng);
      let showLang = this.state.activeCz
      this.setState({
        activeCz: !showLang,
        activeEn: showLang,
      })
    };

    return (
      <div>
        <header  style={{background: `${variables.colors.sherpaBlue}`}}>
            <SideNav {...this.props} />
            <Wrap>
              <HeaderOption>
                  {this.navBar(this.props)}
              </HeaderOption>
              <Language>
                <BtnInt active={activeCz} onClick={() => changeLanguage('cz')}>cz</BtnInt>
                <BtnInt active={activeEn} onClick={() => changeLanguage('en')}>en</BtnInt>
              </Language> 
            </Wrap>
        </header>
      </div>
    )
  }
}

Header.propTypes = {
  navBar: PropTypes.func,
  changeLanguage: PropTypes.func,
};

export default withTranslation()(Header)


const Hamburger = styled.div`
color: ${variables.colors.silver};
cursor: pointer;
`
const HeaderOption = styled.div`
display: flex;
`
const Language = styled.div`
line-height: 2;
display: flex;
`
const Wrap = styled.div`
display: flex;
justify-content: space-between;
margin: 0 1rem;
`
const BtnInt = styled.button`
color: ${variables.colors.skyBlue};
font-size: 1.2rem;
outline: none;
cursor: pointer;
margin: 0rem 0.5rem;
text-transform: uppercase;
${({ active }) => active && `
  color: ${variables.colors.shark};
  font-size: 1rem;
  `}
`