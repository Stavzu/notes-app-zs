import React, { Component } from 'react'
import axios from 'axios'
import {URL} from '../../helpers'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { withTranslation} from 'react-i18next'
import PropTypes from 'prop-types'
import * as variables from '../../styles/variables'


class NoteSearch extends Component {

    state = {
        searchnote: [], 
        note: []
    }

    componentWillMount(){
        axios.get(`${URL}/notes`)
        .then( response => {
            this.setState({
                searchnote: response.data,
            })
        })
    }

    filterListNote = (event) => {
        let updatedListNote = this.state.searchnote;
        updatedListNote = updatedListNote.filter((items) => {
          return items.note.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({
            note: updatedListNote
        });
    }

    renderNote = (data, searchnote) => (
        data.length > 0 && data.length < searchnote.length ?
                data.map((e) => (
                    <div key={e.id}>
                        <Link to={`/notes/${e.id}`} >
                            <FoundItem>{e.note}</FoundItem>
                        </Link>
                    </div>
                ))
            :null
        )  

 
  render() {
    const { t } = this.props;
    const { searchnote, note } = this.state;

      let searchCount = null;
      if (searchnote.length === 0) {
        searchCount = <Total>{t("noNotes")}</Total>
      } else if (searchnote.length === 1) {
        searchCount = <Total>{t("justOne")}</Total>
      } else if (searchnote.length <= 4 ) {
        searchCount = <Total>{t("total")} {searchnote.length} {t("notesLess")}</Total>
      } else if (searchnote.length > 4) {
        searchCount = <Total>{t("total")} {searchnote.length} {t("notesMore")}</Total>
      }

    return (
      <Container>
            <div>
                <Input type="text" placeholder={t("findNote")} onChange={this.filterListNote}/>
                {this.renderNote(note, searchnote)}
            </div>
            {searchCount}
      </Container>
    )
  }
}


NoteSearch.propTypes = {
    searchnote: PropTypes.array,
    note: PropTypes.array,
    updatedListNote: PropTypes.array,
    filterListNote: PropTypes.func,
    renderNote: PropTypes.func
  };

export default withTranslation()(NoteSearch)


const Container = styled.div`
padding: 2rem;
margin-top: 2rem;
display: flex;
width: 80%;
justify-content: space-between;
margin: 0 auto;
`
const Input = styled.input`
outline: none;
border: none;
border-bottom: .1rem solid ${variables.colors.black};
padding: .5rem;
width: 20rem;
font-size: 1.2rem;
&: hover {
    border-bottom: .2rem solid ${variables.colors.skyBlue};
    }
}
`
const Total = styled.div`
font-size: 1.2rem;
line-height: 2;
`
const FoundItem = styled.div`
font-size: 1.4rem;
margin-top: 1rem;
color: ${variables.colors.skyBlue};
`