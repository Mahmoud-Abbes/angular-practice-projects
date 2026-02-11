import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counter: number = 0;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  getCounterStatus(): string{
    if (this.counter < 0) {
      return "negative";
    } else if (this.counter > 0) {
      return "positive";
    } else {
      return "neutral";
    }
  }
}
