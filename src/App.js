import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import i18n from './i18n'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers'
import Routes from './Routes'
import { createGlobalStyle } from "styled-components"
import CSSReset from "./ResetCSS"
import {GlobalStyle} from './styles/style'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import * as variables from './styles/variables'



const createStoreWithMiddlware = applyMiddleware(promiseMiddleware, reduxThunk)(createStore)


function demoAsyncCall() {
  return new Promise((resolve) => 
    setTimeout(() => resolve(), 1500));
}

export default class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {

    const { loading } = this.state;
      
    if(loading) { 
      return <Loading> 
                <Loader 
                  type="Oval"
                  color= '#81cfdf'
                  height="100"	
                  width="100"
                /> 
            </Loading>
        }

    return (
      <Provider store={createStoreWithMiddlware(
        rootReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )}>
        <I18nextProvider i18n={ i18n }>
          <GlobalStyle />
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
        </I18nextProvider>
      </Provider>
    )
  }
}


const Loading = styled.div`
position: absolute;
left: 50%;
top: 30%;
transform: translateX(-50%);
`
