import * as React from 'react'
import { Component } from 'react'
import './style.css'
import D3Component, { GraphObject } from './D3Component'
export interface Props {
  graph: GraphObject
}

export default class extends Component<Props>{
  render() {
    const { graph } = this.props
    return (
      <D3Component graph={graph} />
    )
  }
}
