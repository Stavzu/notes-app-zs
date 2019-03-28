import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { withTranslation } from 'react-i18next'
import * as variables from '../../styles/variables'
import '../../index'

const MoreInfo = ({note, t}) => {
    return (
            <About>
                {!note.description.length
                    ? <NoValue>{t("noDescription")}</NoValue>
                    :<span>{note.description}</span>
                }

                {!note.createAt
                    // if is it mock notes from json server, the date is not available, for get date create new note 
                    ? <Date>{t("createAt")}: {t("notAvailable")}</Date>
                    : <Date>{t("createAt")}: <Moment format="DD/MM/YYYY">{note.createAt}</Moment></Date>
                }
            </About>
        );
    };

MoreInfo.propTypes = {
    note: PropTypes.object,
}

export default withTranslation()(MoreInfo)


const About = styled.div`
padding: 1rem;
font-size: 1.2rem;
width: 80%;
margin: 0 auto;
border-radius: 0.2rem;
box-shadow: .1rem .1rem .5rem .2rem rgba(0,0,0,0.11);
margin-bottom: .6rem;
box-sizing: border-box;
-webkit-transition: all .4s ease;
transition: all .4s ease;
margin-bottom: 3rem;
`
const Date = styled.div`
position: relative;
text-align: right;
color: ${variables.colors.skyBlue};
margin-top: 1rem;
`
const NoValue = styled.span`
color: ${variables.colors.silver};
font-size: 1.2rem;
`