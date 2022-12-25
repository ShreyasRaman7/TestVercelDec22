import React from 'react';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: 'X',
      winner: null,
      clickedIndex:null,
    };
  }

  handleClick(index) {
    if (this.state.board[index] || this.state.winner) {
      return;
    }
  
    const newBoard = this.state.board.slice();
    newBoard[index] = this.state.player;
    let clickedClass = `clicked-square-${this.state.player.toLowerCase()}`;
  
    this.setState({
      board: newBoard,
      player: this.state.player === 'X' ? 'O' : 'X',
      clickedClass: clickedClass,  // Add a new clickedClass state variable
      clickedIndex: index,
    });
  
    this.checkWinner(newBoard);  // Pass the new board to checkWinner instead of using this.state.board
  }
  

  checkWinner(board) {  // Add board as an argument
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] &&  // Use the board passed as an argument, not this.state.board
          board[a] === board[b] &&
          board[b] === board[c]) {
        this.setState({
          winner: board[a],
        });
        return;
      }
    }
  
    if (!board.includes(null)) {  // Use the board passed as an argument, not this.state.board
      this.setState({
        winner: 'T',
      });
    }
  }
  
  

  render() {
    const rows = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const index = 3 * i + j;
  let className = 'unclicked-square';
  if (index === this.state.clickedIndex) {
    className += ` ${this.state.clickedClass}`;
  }
        row.push(
          <button className={`unclicked-square ${this.state.clickedClass}`} key={3 * i + j} onClick={() => this.handleClick(3 * i + j)}>
  {this.state.board[3 * i + j]}
</button>
        );
      }
      rows.push(<div key={i} className="board-row">{row}</div>);
    }

    let status;
    if (this.state.winner === 'X') {
      status = 'Player X wins!';
    } else if (this.state.winner === 'O') {
      status = 'Player O wins!';
    } else if (this.state.winner === 'T') {
      status = 'It\'s a tie!';
    } else {
      status = `Next player: ${this.state.player}`;
    }

    return (
      <div>
        <h1>TicTacToe</h1>
        <div className="status">{status}</div>
        {rows}
      </div>
    );
  }
}

export default TicTacToe;





