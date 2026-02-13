import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqAccordionAnimation } from './faq-accordion.animation';

@Component({
  selector: 'app-faq-accordion',
  imports: [CommonModule],
  templateUrl: './faq-accordion.html',
  styleUrl: './faq-accordion.scss',
  animations: [FaqAccordionAnimation.slideToggle],
})
export class FaqAccordion {
  OpenedInexes: number[] = new Array(0);

  faqs = [
    {
      question: 'What is Angular?',
      answer: 'Angular is a platform for building mobile and desktop web applications.',
    },

    {
      question: 'What is a component in Angular?',
      answer:
        'A component controls a patch of the screen called a view. Components are the main building block of Angular applications.',
    },

    {
      question: 'What are Angular directives?',
      answer:
        'Directives are instructions in the DOM. Angular directives allow you to attach behavior to elements in the DOM.',
    },
  ];

  openCloseFaq(index: number) {
    this.OpenedInexes.includes(index)
      ? (this.OpenedInexes = this.OpenedInexes.filter((el) => el !== index))
      : this.OpenedInexes.push(index);
  }

  checkFaqOpen(index: number): boolean {
    return this.OpenedInexes.includes(index);
  }
}
