import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import * as variables from '../../styles/variables'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'



const SideNavItems = () => {

    const items = [
        {
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            icon: 'sticky-note',
            text: 'Notes',
            link: '/'
        },
        {
            icon: 'plus',
            text: 'Add note',
            link: '/notes/add'
        }
    ]

    const showItems = () => {
        return items.map((item, i) => {
            return (
                <ItemWrap key={i}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon} />
                        <Item>
                            {item.text}
                        </Item>
                    </Link>
                </ItemWrap>
            )
        })
    }

    return (
        <div>
            {showItems()}
        </div>
    );
};

SideNavItems.propTypes = {
    showItems: PropTypes.func,
  };

export default withTranslation()(SideNavItems);


const ItemWrap = styled.div`
font-weight: 300;
font-size: 1.4rem;
color: ${variables.colors.greyDark};
padding: 1rem;
border-top: .1rem solid ${variables.colors.greyMid};
`
const Item = styled.span`
margin-left: 1rem;
` 