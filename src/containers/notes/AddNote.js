import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addNote, clearNewNote } from '../../Actions/index'
import styled from 'styled-components'
import Button from '../../components/elements/Button'
import FontAwesome from 'react-fontawesome'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import '../../index'
import {BackBtn, BackText, Result, Here, Title, UpdatedWrap, Required} from './Notes_styled'

import Input from '../../components/elements/input/Input'
import Textarea from '../../components/elements/textarea/Textarea'
import Container from '../../components/elements/container/Container'


class AddNote extends Component {
    state = {
        formdata:{
            note: '',
            description:'',
            createAt: new Date()
        },
    }

    handleInput = (event,note) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[note] = event.target.value;
        this.setState({
            formdata:newFormdata
        })
    }

    showNewNote = (data, t) => (
        data ?
            <UpdatedWrap className='added'>
                <Result>{t("great")} <FontAwesome name='check' /></Result>
                    <Link to={`/notes/${data.id}`}>
                         <Here>{t("clickToSeeNew")}</Here>
                    </Link>
            </UpdatedWrap>
        : null
    )

    submitForm = (e) => {
        e.preventDefault();
        this.props.addNote({
            ...this.state.formdata,
        });
    }

    componentWillUnmount(){
        this.props.clearNewNote()
    }

    render() {
        const { t, notes} = this.props;
        const { formdata } = this.state;
        const isEnabled = this.state.formdata.note.length > 0
        return (
            <div className='animated'>
                 <Link to={'/'}>
                    <BackBtn><FontAwesome name='arrow-left' /><BackText>{t("backToList")}</BackText></BackBtn>
                </Link> 
                <Container>
                    <form onSubmit={this.submitForm}>
                        <Title>{t("add")}</Title>

                        <Input
                            type="text"
                            placeholder= {t("enterNote")}
                            value={formdata.note}
                            onChange={(event)=>this.handleInput(event,'note')}
                        />
                        {!isEnabled ? <Required>{t("required")}</Required> : null}

                        <Textarea
                            placeholder={t("enterDesc")}
                            value={formdata.description}
                            onChange={(event)=>this.handleInput(event,'description')}
                        />

                         <Button
                            type="addNote"
                            text={t("add")}
                            disabled={!isEnabled}
                        />  

                        {
                            notes.newNote ? 
                                this.showNewNote(notes.newNote, t)
                            :null
                        } 
                    </form>
                </Container>
            </div>
        );
    }
}

AddNote.propTypes = {
    handleInput: PropTypes.func,
    showNewNote: PropTypes.func,
    submitForm: PropTypes.func,
    newNote: PropTypes.object,
    noteList: PropTypes.array,
    formdata: PropTypes.object,
    newFormdata: PropTypes.object,
  };

function mapStateToProps(state){
    return {
        notes:state.notes
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addNote, clearNewNote }, dispatch)
  }

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(AddNote))



