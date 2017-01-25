import React, { Component } from 'react'
import Square from './square'
import Playerinfo from './player'

class Board extends Component {
  constructor(){
    super()
    this.state = {
      board: [],
      turn: 'Player 1', 
      winner: null
    }
    this.clickSquare = this.clickSquare.bind(this)
  }

  clickSquare(e){
    let nextPlayer = (this.state.turn === 'Player 1' ? 'Player 2' : 'Player 1');
    let x = e.target.getAttribute("x");
    let y = e.target.getAttribute("y");
    let new_board = [];

    for(let i = 0; i < 25; i++) {
      let square = this.state.board[i]
      if(this.state.board[i][0] >= x && this.state.board[i][1] >= y) {
        square[2] = false
      }
      new_board.push(square)
    }

    if(x === '0' && y === '0') {
      this.setState({
        boars: new_board,
        turn: nextPlayer,
        winner: nextPlayer
      })  
    } else {
      this.setState({
        board: new_board,
        turn: nextPlayer
      })
    }

  }

  componentWillMount(){
    let board = [];
    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
        board.push([i, j, true])
      }
    }
    this.setState({
      board: board
    })
  }

  render(){
    const boardSquares = this.state.board.map((square, i) => {
      return <Square key={i} position_x={square[0]} position_y={square[1]} onClick={this.clickSquare} visible={square[2]}/>
    })

    return (
      <div className="board">
        <Playerinfo turn={this.state.turn} winner={this.state.winner} />
        <br />
        {boardSquares}
      </div> 
    )
  }
}

export default Board
