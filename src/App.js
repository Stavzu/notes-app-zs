import React from 'react'
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


const createStoreWithMiddlware = applyMiddleware(promiseMiddleware, reduxThunk)(createStore)

 const App = () => (
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

export default App
