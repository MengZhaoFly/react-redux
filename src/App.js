import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
// import CreateStore from './CreateStore'
// import propTypes from 'prop-types'

class App extends Component {
  // 交给provide处理
  // static childContextTypes = {
  //   store: propTypes.object
  // }
  // getChildContext () {
  //   return { store }
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
