import { animate, state, style, transition, trigger } from '@angular/animations';

export const FaqAccordionAnimation = {
  slideToggle: trigger('slideToggle', [
    state('void', style({ height: 0, opacity: 0 })),
    state('*', style({ height: '*', opacity: 1 })),
    transition(':enter', [animate('300ms ease-out')]),
    transition(':leave', [animate('300ms ease-in')]),
  ]),
};
