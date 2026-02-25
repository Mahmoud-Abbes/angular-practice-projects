import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SoftwareEngineer } from '../../models/software-engineer.model';
import { EngineerService } from '../../services/engineer.service';
import { CommonModule } from '@angular/common';
import { EngineerCard } from '../engineer-card/engineer-card';

@Component({
  selector: 'app-engineer-list',
  imports: [CommonModule, EngineerCard],
  templateUrl: './engineer-list.html',
  styleUrl: './engineer-list.scss',
})
export class EngineerList implements OnInit {
  engineerList: SoftwareEngineer[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  @Output() toggleEdit = new EventEmitter<void>();
  @Output() setEditEngineer = new EventEmitter<SoftwareEngineer>();

  constructor(private engineerService: EngineerService) {}

  ngOnInit(): void {
    this.fetchEngineers();
  }

  fetchEngineers() {
    this.isLoading = true;
    this.errorMessage = '';

    this.engineerService.getAllEngineers().subscribe({
      next: (engineers) => {
        this.engineerList = engineers;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err;
        this.isLoading = false;
      },
    });
  }

  toggleEditMode() {
    this.toggleEdit.emit();
  }

  setEditedEngineer(editedEngineer: SoftwareEngineer) {
    this.setEditEngineer.emit(editedEngineer);
  }
}
