import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-the-number.html',
  styleUrl: './guess-the-number.scss',
})
export class GuessTheNumber {
  seceretNumber: number = this.generateRandomNumber();
  feedbackMessage: string = '';
  isGameEnded: boolean = false;
  isGameWon: boolean = false;
  guessedNumber?: number;

  private static readonly MAX_NUMBER = 100;
  private static readonly MAX_ATTEMPTS = 10;

  attemptsLeft: number = GuessTheNumber.MAX_ATTEMPTS;

  private generateRandomNumber() : number {
    return Math.floor(Math.random() * 100) + 1;
  }

  submitGuess() {
    // console.log(this.seceretNumber);
    if (
      this.guessedNumber !== undefined &&
      this.guessedNumber > 0 &&
      this.guessedNumber <= GuessTheNumber.MAX_NUMBER &&
      !this.isGameEnded
    ) {
      this.attemptsLeft--;

      if (this.attemptsLeft > 0) {
        if (this.guessedNumber === this.seceretNumber) {
          this.winGame();
        } else if (this.guessedNumber > this.seceretNumber) {
          this.feedbackMessage = "Too High! Try again.";
        } else {
          this.feedbackMessage = "Too Low! Try again.";
        }
      } else {
        this.loseGame();
      }
    } else {
        this.feedbackMessage = 'Please enter a valid number';
    }

    this.guessedNumber = undefined;
  }

  private winGame() {
    this.isGameEnded = true;
    this.isGameWon = true;
    this.feedbackMessage = "Congratulations! you guessed the correct number!";
  }

  private loseGame() {
    this.isGameEnded = true;
    this.feedbackMessage = `Game over! The correct number was ${this.seceretNumber}`
  }

  resetGame() {
    this.seceretNumber = this.generateRandomNumber();
    this.feedbackMessage = '';
    this.isGameEnded = false;
    this.isGameWon = false;
    this.attemptsLeft = GuessTheNumber.MAX_ATTEMPTS;
  }
}
