import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNote } from '../../Actions/index'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import Moment from 'react-moment'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import '../../index'
import { BoxTop, Personal, ItemTitle, Item, BackText, BackBtn,WrapDate, ItemDate } from './Notes_styled'

import Container from '../../components/elements/container/Container'
import Button from '../../components/elements/Button'


class Note extends Component {
  componentWillMount() {
    this.props.getNote(this.props.match.params.id)
  }

  getDetail = (data,t) => (
    data ?
      <div>
        <BoxTop>
          {data.note}
          <Button
              type="toEdit"
              noteId={`${data.id}`}
              icon='user-edit'
            />
        </BoxTop>
        <Personal>
          <Item>
            <ItemTitle>{t("description")}</ItemTitle>
            <span>{data.description}</span>
          </Item>
        </Personal>
        <WrapDate>
          <Item>
            <ItemDate>{t("createAt")}:</ItemDate> 
            {/* if is it mock notes from json server, the date is not available, for get date create new note */}
              {!data.createAt 
                ? <ItemDate>{t("notAvailable")}</ItemDate> 
                : <ItemDate>
                    <Moment format="DD/MM/YYYY">{data.createAt}</Moment>
                  </ItemDate>
                } 
            </Item>
              {!data.updateAt 
                ? null 
                : <Item>
                    <ItemDate>{t("updateAt")}:</ItemDate>
                    <ItemDate><Moment format="DD/MM/YYYY">{data.updateAt}</Moment></ItemDate>                           
                  </Item>
                } 
          </WrapDate>
      </div>
    :null
  )

  render() {
    const { t, notes } = this.props;
    return (
      <div>
          <Link to={'/'}>
            <BackBtn><FontAwesome name='arrow-left' /><BackText>{t("backToList")}</BackText></BackBtn>
          </Link>
          <Container>
            {this.getDetail(notes.note, t)}
          </Container>
      </div>

    )
  }
}

Note.propTypes = {
  getDetail: PropTypes.func,
  notes: PropTypes.object,
  note: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getNote }, dispatch)
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Note))


