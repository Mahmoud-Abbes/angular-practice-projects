import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  choices: string[] = ['Rock', 'Paper', 'Scissors'];
  playerChoice: string | undefined;
  computerChoice: string | undefined;
  isGameOver: boolean = false;
  gameResult: string | undefined;
  playerScore: number = 0;
  computerScore: number = 0;

  makePlayerChoice(choice: number) {
    if (!this.isGameOver) {
      if (choice >= 0 && choice <= 2) {
        this.playerChoice = this.choices[choice];
        this.makeComputerChoice();
        this.setResult();
        this.isGameOver = true;
      }
    }
  }

  generateRandomchoice(): number {
    return Math.floor(Math.random() * 3);
  }

  makeComputerChoice() {
    this.computerChoice = this.choices[this.generateRandomchoice()];
  }

  setResult() {
    if (this.playerChoice === this.computerChoice) {
      this.gameResult = "It's a Tie";
    } else if (
      (this.playerChoice === 'Paper' && this.computerChoice === 'Rock') ||
      (this.playerChoice === 'Rock' && this.computerChoice === 'Scissors') ||
      (this.playerChoice === 'Scissors' && this.computerChoice === 'Rock')
    ) {
      this.gameResult = 'You win!';
      this.playerScore++;
    } else {
      this.gameResult = 'You lose!';
      this.computerScore++;
    }
  }

  restartGame() {
    this.isGameOver = false;
    this.gameResult = undefined;
  }
}
