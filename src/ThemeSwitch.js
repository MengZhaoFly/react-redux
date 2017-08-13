import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from './react-redux'
class ThemeSwitch extends Component {
    static contextTypes = {
        store: propTypes.object
    }
    handChangeTheme(color) {
        // const { store } = this.context
        // store.dispatch({
        //     type: 'CHANGE_COLOR', color: color
        // })
        if (this.props.onSwitch) {
            this.props.onSwitch(color)
        }
        
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
const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitch: (color) => {
            dispatch({
                type: 'CHANGE_COLOR', color: color
            })
        }
    }
}
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
export default ThemeSwitch