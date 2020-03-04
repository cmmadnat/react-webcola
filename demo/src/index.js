import React, { Component } from 'react'
import { render } from 'react-dom'

import Example from '../../src'
import data from './miserable.json'

class Demo extends Component {
  render() {
    return <div>
      wtf
      <Example graph={data} />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
