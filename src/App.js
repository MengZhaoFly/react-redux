import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
import CreateStore from './CreateStore'
import propTypes from 'prop-types'
const ThemeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: 'red'
    }
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.color
      }
    default: 
      return state
  }
}
const store = CreateStore(ThemeReducer)
class App extends Component {
  static childContextTypes = {
    store: propTypes.object
  }
  getChildContext () {
    return { store }
  }
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
