import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() toggleAdd = new EventEmitter<void>();
  @Input() isAddEnabled: boolean = true;

  enableAddMode(){
    this.toggleAdd.emit();
  }
}
