import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jgv',
  templateUrl: './jgv.component.html',
  styleUrls: ['./jgv.component.css']
})
export class JgvComponent {

  currentPlayer: string = 'X';
  winner: string = '';

  board: string[][] = [
    ['','',''],
    ['','',''],
    ['','','']
  ];

  processPlay(line: number, col: number) {
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer;
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }
      if(this.currentPlayer == 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  checkWinner(player: string): boolean {
    for(let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true
      }
    }
    for(let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true
      }
    }
    return false
  }

  reset() {
    this.currentPlayer = 'X';
    this.winner = '';
    this.board = [
      ['','',''],
      ['','',''],
      ['','','']
    ];
  }
}
