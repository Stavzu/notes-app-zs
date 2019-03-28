import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { withTranslation } from 'react-i18next'
import { updateNote, getNote, clearNote, deleteNote  } from '../../Actions/index'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import '../../index'
import {BackBtn, BackText, Result, Here, Title, UpdatedWrap, DeletePart, Ask, Required} from './Notes_styled'

import Button from '../../components/elements/Button'
import Container from '../../components/elements/container/Container'
import Input from '../../components/elements/input/Input'
import Textarea from '../../components/elements/textarea/Textarea'

class EditNote extends Component {

    state = {
        formdata:{
            id: this.props.match.params.id,
            note: '',
            description:'',
            createAt:'',
            complete:'',
            updateAt: ''
        }
    }

    componentWillMount() {
        this.props.getNote(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.notes.note) {
            this.setState({
                formdata: {
                    id: nextProps.notes.note.id,
                    note: nextProps.notes.note.note,
                    description: nextProps.notes.note.description,
                    createAt: nextProps.notes.note.createAt,
                    complete: nextProps.notes.note.complete,
                    updateAt: new Date(), 
                }, 
            })
        } 
    }

    handleInput = (e,note) => {
        const newFormdata = {...this.state.formdata }
        newFormdata[note] = e.target.value;

        this.setState({
            formdata:newFormdata,
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        let formdata = {...this.state.formdata}
        this.props.updateNote(this.state.formdata.id, this.state.formdata);
        this.setState({
            formdata
        })
    }

    deleteNote = () => {
        this.props.deleteNote(this.props.match.params.id)
    }

    redirectUser = () => {
        setTimeout(()=>{
            this.props.history.push('/')
        },2000)
    }

    componentWillUnmount(){
        this.props.clearNote()
    } 


  render() {
      const { t} = this.props;
      const { formdata } = this.state;
      const { notes } = this.props;
      const isEnabled = this.state.formdata.note.length > 0;
    return (
      <div>
            <Link to={'/'}>
                <BackBtn><FontAwesome name='arrow-left' /><BackText>{t("backToList")}</BackText></BackBtn>
            </Link>
        <Container>
            <form onSubmit={this.submitForm}>
                <Title>{t("editNote")}</Title>

                <Input
                    type="text"
                    placeholder={t("enterNote")}
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
                    type="editNote"
                    text={t("edit")}
                    disabled={!isEnabled}
                />  

            {
                notes.updateNote ? 
                    <UpdatedWrap>
                        <Result>{t("update")} <FontAwesome name='check' /></Result>
                        <Link to={`/notes/${notes.note.id}`}>
                            <Here>{t("clickToSeeUpdated")}</Here>
                        </Link>
                    </UpdatedWrap>
                :null
            }  
                
            </form>

            <DeletePart>
                <Ask>{t("delete")}</Ask>
                    <FontAwesome name='arrow-down' />
                    <Button
                        type="delete"
                        deleteNote={()=> this.deleteNote()}
                        text={t("deleteNote")}
                    />
            </DeletePart>

            {
                notes.noteDeleted ? 
                    <UpdatedWrap className='deleted'>{t("deleted")} {this.redirectUser()}</UpdatedWrap>
                :null
            } 
        </Container>
      </div>
    )
  }
}

EditNote.propTypes = {
    handleInput: PropTypes.func,
    submitForm: PropTypes.func,
    formdata: PropTypes.object,
    newFormdata: PropTypes.object,
    deleteNote: PropTypes.func,
    redirectUser: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateNote, getNote, clearNote, deleteNote }, dispatch)
  }

export default withTranslation() (connect(mapStateToProps, mapDispatchToProps) (EditNote))
