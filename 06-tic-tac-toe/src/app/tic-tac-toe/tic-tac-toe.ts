import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.html',
  styleUrl: './tic-tac-toe.scss',
})
export class TicTacToe {
  currentPlayer: string = 'X';
  board: string[] = Array(9).fill('');
  isGameOver: boolean = false;
  isWinner: boolean = false;

  makeMove(index: number) {
    // Verify if the gaame not over yet
    if (!this.isGameOver) {
      // Veify empty slot
      if (this.board[index] === '') {
        // Make move
        this.board[index] = this.currentPlayer;
        // Verify game status
        this.verifyGameStatus();
      }
    }
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  verifyGameStatus() {
    // Check if win
    console.log('Is winner ?' + this.checkWinner());
    if (this.checkWinner()) {
      this.isGameOver = true;
      this.isWinner = true;
      // Check for full board -> draw
    } else if (this.checkBoardFull()) {
      this.isGameOver = true;
    } else {
      // Change current Player
      this.changePlayer();
    }
  }

  checkWinner(): boolean {
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

    return winningCombinations.some(
      ([a, b, c]) =>
        this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c],
    );
  }

  checkBoardFull() {
    return this.board.every((cell) => cell !== '');
  }

  resetGame() {
    this.currentPlayer = 'X';
    this.board = Array(9).fill('');
    this.isGameOver = false;
    this.isWinner = false;
  }
}
