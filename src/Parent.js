/* Parent.js */
import React from 'react'
import Child from './Child'

class Parent extends React.Component {
  onClick = () => {
    this.child.method() // do stuff
  }
  render() {
    return (
      <div>
        <Child onRef={ref => (this.child = ref)} />
        <button onClick={this.onClick}>Child.method()</button>
      </div>
    );
  }
}