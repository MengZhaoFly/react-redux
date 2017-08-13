import React, { Component } from 'react'
import propTypes from 'prop-types'
// mapStateToProps告诉组件怎么取数据
export const connect = (mapStateToProps, mapDispatchToProps) => (WrapperedComponent) => {
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
            const stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {}
            const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {}
            // 整合
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
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