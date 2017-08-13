import React, { Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import propTypes from 'prop-types'
import { connect } from './react-redux'

class Content extends Component {
    static contextTypes = {
        store: propTypes.object
    }
    render() {
        return (
            <div>
                <h3 style={{ color: this.props.themeColor }}>内容</h3>
                <ThemeSwitch />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Content = connect(mapStateToProps)(Content)

export default Content