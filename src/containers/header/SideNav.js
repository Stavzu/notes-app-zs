import React from 'react';
import SideNav from 'react-simple-sidenav'
import SideNavItems from './SideNavItems'
import * as variables from '../../styles/variables'


const SideNavigation = (props) => {
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background:`${variables.colors.silver}`,
                    maxWidth:'220px'
                }}
            >
            <SideNavItems />
            </SideNav>
        </div>
    )
}

export default SideNavigation


