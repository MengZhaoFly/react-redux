import React, { Component } from 'react'
import propTypes from 'prop-types'

export const connect = (mapStateToProps) => (WrapperedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: propTypes.object
        }
        constructor() {
            super()
            this.state = {
                allProps: {}
            }
        }
        componentWillMount() {
            const { store } = this.context
            this._updateProps()
            // 监听数据变化
            store.Subscribe(() => this._updateProps())
        }
        _updateProps() {
            const { store } = this.context
            // 可以额外传入props
            const stateProps = mapStateToProps(store.getState(), this.props)
            // 整合
            this.setState({
                allProps: {
                    ...stateProps
                }
            })
        }
        render() {
            return (
                <WrapperedComponent {...this.state.allProps}/>
            )
        }
    }
    return Connect
}