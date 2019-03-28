import React, { Component } from 'react'
import Header from '../containers/header/Header'
import PropTypes from 'prop-types'


class Layout extends Component {
  state = {
    showNav: false
  }
  toggleSidenav = (action) =>{
      this.setState({
          showNav:action
      })
  }

  render() {
    return (
      <div>
          <Header
            showNav={this.state.showNav}
            onHideNav={() => this.toggleSidenav(false)}
            onShowNav={() => this.toggleSidenav(true)}
           />
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  toggleSidenav: PropTypes.func,
}

export default Layout