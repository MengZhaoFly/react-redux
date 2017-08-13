import React, { Component } from 'react'
import propTypes from 'prop-types'
export const connect = (WrapperedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: propTypes.object
        }
        
    }
}