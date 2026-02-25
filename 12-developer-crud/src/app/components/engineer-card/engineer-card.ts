import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SoftwareEngineer } from '../../models/software-engineer.model';
import { EngineerService } from '../../services/engineer.service';

@Component({
  selector: 'app-engineer-card',
  imports: [],
  templateUrl: './engineer-card.html',
  styleUrl: './engineer-card.scss',
})
export class EngineerCard {
  @Input() name: string | null = null;
  @Input() techStack: string | null = null;
  @Input() id: number | null = null;

  @Output() toggleEdit = new EventEmitter<void>();
  @Output() setEditedEngineer = new EventEmitter<SoftwareEngineer>();
  @Output() fetchEngineers = new EventEmitter<void>();

  deleteText: string = "Delete";
  deleteDisabled: boolean = false;

  constructor(private engineerService: EngineerService) {}

  toggleEditMode() {
    this.toggleEdit.emit();

    let editedEngineer = {
      id: this.id!,
      name: this.name!,
      techStack: this.techStack!,
    };

    this.setEditedEngineer.emit(editedEngineer);
  }

  deleteEngineer() {
    this.deleteText = "Deleting...";
    this.deleteDisabled = true;
    if (this.id != null) {
      this.engineerService.deleteEngineer(this.id).subscribe({
        next: () => {
          this.fetchEngineers.emit();
        },
        error: () => {
          this.deleteText = "Delete";
          this.deleteDisabled = false;
        }
      });
    }
  }
}
