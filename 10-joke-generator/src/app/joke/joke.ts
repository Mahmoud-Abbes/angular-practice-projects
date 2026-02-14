import { Component } from '@angular/core';
import { JokeService } from '../services/joke-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joke',
  imports: [CommonModule],
  templateUrl: './joke.html',
  styleUrl: './joke.scss',
})
export class Joke {
  jokeSetup: string = '';
  jokePunchLine: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private jokeService: JokeService) {}

  fetchJoke() {
    this.isLoading = true;
    this.errorMessage = '';

    this.jokeService.getRandomJoke().subscribe({
      next: (joke) => {
        this.jokeSetup = joke.setup;
        this.jokePunchLine = joke.punchline;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load joke. Please try again!';
        this.jokeSetup = '';
        this.jokePunchLine = '';
        this.isLoading = false;
      },
    });
  }
}
