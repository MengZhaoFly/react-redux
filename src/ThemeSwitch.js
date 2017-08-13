import React, { Component } from 'react'
import propTypes from 'prop-types'
class ThemeSwitch extends Component {
    static contextTypes = {
        store: propTypes.object
    }
    handChangeTheme(color) {
        const { store } = this.context
        store.dispatch({
            type: 'CHANGE_COLOR', color: color
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handChangeTheme.bind(this, 'red')}>red</button>
                <button onClick={this.handChangeTheme.bind(this, 'blue')}>blue</button>
            </div>
        )
    }
}

export default ThemeSwitch