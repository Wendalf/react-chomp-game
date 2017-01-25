import React, { Component } from 'react'

class Playerinfo extends Component {
  render(){
    return (
        <div>
          {this.props.winner ? 
          this.props.winner + ' won the game' : 
          `${this.props.turn}'s turn. Go chomp some squares off!`}
        </div>
    )
  }
}

export default Playerinfo
