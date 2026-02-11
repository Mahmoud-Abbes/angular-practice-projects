import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.scss',
})
export class Stopwatch {
private intervalRef: number | undefined;
  elapsedTime: number = 0;
  isRunning: boolean = false;

  start() {
    this.isRunning = true;

    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1;
    }, 100);
  }

  stop() {
    this.isRunning = false;

    clearInterval(this.intervalRef);
  }

  reset() {
    if (!this.isRunning) {
      this.elapsedTime = 0;
    }
  }

}
