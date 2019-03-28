import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import * as variables from '../../styles/variables'
import {Container, Name, Arrow, Note} from './Notes_styled'

import MoreInfo from '../../components/notes/MoreInfo'


class NoteItem extends Component {
    state = {
      showInfo: false,
      active: false
  }

  toggleInfo = () => {
      let showDone = this.state.showInfo;
      let changeColor = this.state.active;

      this.setState({
          showInfo: !showDone,
          active: !changeColor
      })
  }

  render() {
 
    let button = null;
    let arrow = null;
    if(this.state.showInfo) {
        button = <MoreInfo note={this.props.note} />
        arrow = <FontAwesome name='sort-down' />
    } else {
        button = null
        arrow = <FontAwesome name='sort-up' />
    }

    const { note } = this.props
    const { active } = this.state


    return (
      <div>
        <Container>
           <Link to={`/notes/${note.id}`}>          
             <Note active={active}>{note.note}</Note>
            </Link>
           <Arrow onClick={() => this.toggleInfo()}>{arrow}</Arrow>
        </Container>
        {button}
      </div>
    )
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  toggleInfo: PropTypes.func
};

export default NoteItem

