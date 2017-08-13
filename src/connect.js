import React, { Component } from 'react'
import propTypes from 'prop-types'

export const connect = (mapStateToProps) => (WrapperedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: propTypes.object
        }
        constructor() {
            super()
            this.state = {}
        }
        componentWillMount() {
            const { store } = this.context
            this.setState = ({
                store
            })
        }
        render() {
            return (
                <WrapperedComponent data={ this.state.store }/>
            )
        }
    }
    return Connect
}