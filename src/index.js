import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))

 

/* class App extends React.Component {
    state = {
      loading: true
    };
  
    componentDidMount() {
      // this simulates an async action, after which the component will render the content
      demoAsyncCall().then(() => this.setState({ loading: false }));
    }
    
    render() {
      const { loading } = this.state;
      
      if(loading) { // if your component doesn't have to wait for an async action, remove this block 
        return null; // render null when app is not ready
      }
      
      return (
        <div>I'm the app</div>
      ); 
    }
  }
  
  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  ); */