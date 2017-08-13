import React, { Component } from 'react'
import propTypes from 'prop-types'
class Header extends Component {
    static contextTypes = {
        store: propTypes.object
    }
    constructor () {
        super()
        this.state = { themeColor: ''}
    }
    componentWillMount() {
        this._updateThemeColor()
        const { store } = this.context
        store.Subscribe(() => this._updateThemeColor())
    }
    _updateThemeColor() {
        const { store } = this.context
        const state = store.getState()
        this.setState({
            themeColor: state.themeColor
        })
    }
    render() {
        return (
            <h3 style={{ color: this.state.themeColor }}>标题</h3>
        )
    }
}

export default Header