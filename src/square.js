import React, { Component } from 'react'

class Square extends Component {
  render(){
    let chomped = (this.props.visible) ? "" : "invisible"
    return (
        <div className={ `square ${chomped}`} onClick={this.props.onClick} x={this.props.position_x} y={this.props.position_y}>
        </div>
    )
  }
}

export default Square


