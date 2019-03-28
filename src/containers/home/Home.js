import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled  from 'styled-components'
import * as variables from '../../styles/variables'
import { connect } from 'react-redux'
import { getNotes } from '../../Actions/index'
import { Link } from 'react-router-dom'
import '../../index.css'
import { withTranslation } from 'react-i18next'

import NoteSearch from '../../components/search/NoteSearch'
import NoteItem from '../notes/NoteItem'
import IconPlus from '../../components/elements/icons/IconPlus'

class Home extends Component {

    componentWillMount() {
        this.props.dispatch(getNotes())
    }

    renderNote = (data, t) => (
        data.noteList ?
            data.noteList.map(note => (
                <NoteItem key={note.id} note={note} id={note.id} />
            ))  
            :<NoData>
                <div>{t("notesNoAvailable")}</div>
                <Link to='/notes/add'><NewNoteLink>{t("clickforNew")}</NewNoteLink></Link>
            </NoData>
        ) 

  render() {

    const { notes, t} = this.props;

    let addBtn = null;
    if (notes.noteList) {
        addBtn = <BtnAdd><Link to={`/notes/add`}><IconPlus></IconPlus></Link></BtnAdd> 
    } else  {
        addBtn = <BtnAddNoData><Link to={`/notes/add`}><IconPlus></IconPlus></Link></BtnAddNoData> 
    } 

    return (
      <Box className='animated'>
        <NoteSearch />
        {this.renderNote(notes, t)}
        {addBtn}
      </Box>
    )
  }
}

Home.propTypes = {
    noteList: PropTypes.array,
    renderNote: PropTypes.func,
    addBtn: PropTypes.string,
    note: PropTypes.string
  };


const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default withTranslation()(connect(mapStateToProps) (Home))



const BtnAdd = styled.button`
position: fixed;
right: 5rem;
bottom: 5rem;
width: 5rem;
height: 5rem;
background-color: ${variables.colors.skyBlue};
border: 0;
padding: 0;
box-shadow: 0 .6rem .9rem 0 rgba(0, 0, 0, 0.15);
border-radius: 50%;
display: inline-block;
right: 1.6rem;
bottom: 2.4rem;
line-height: 0;
font-size: 22;
outline: none;
`
const BtnAddNoData = styled.button`
margin: 0;
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
width: 5rem;
height: 5rem;
background-color: ${variables.colors.skyBlue};
border: 0;
padding: 0;
box-shadow: 0 .6rem .9rem 0 rgba(0, 0, 0, 0.15);
border-radius: 50%;
display: inline-block;
right: 1.6rem;
bottom: 2.4rem;
line-height: 0;
outline: none;
`
const Box = styled.div`
margin-top: 4rem;
margin-bottom: 4rem;
`
const Loading = styled.div`
text-align: center;
`
const NoData = styled.div`
font-size: 1.4rem;
text-align: center;
margin: 0;
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
`
const NewNoteLink = styled.div`
padding-top: 2rem;
font-size: 1.2rem;
`
