import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  name: string = 'Lorem';
  age: number | null = 22;
  description: string =
    'Duis ex reprehenderit ea deserunt Ut laboris minim pariatur Lorem et excepteur ullamco eu aliquip eiusmod proident eu dolore.';
}
