import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SoftwareEngineer } from '../../models/software-engineer.model';
import { EngineerService } from '../../services/engineer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  imports: [FormsModule],
  templateUrl: './edit-form.html',
  styleUrl: './edit-form.scss',
})
export class EditForm {
  @Input() editEngineer!: SoftwareEngineer;
  @Output() close = new EventEmitter<void>();

  constructor(private engineerService: EngineerService) {}

  isSaving: boolean = false;
  saveText: string = 'Save';
  errorMessage: string = '';

  closeForm() {
    this.close.emit();
  }

  save() {
    if (this.editEngineer.name && this.editEngineer.techStack) {
      this.isSaving = true;
      this.saveText = 'Saving...';
      this.engineerService.editEngineer(this.editEngineer).subscribe({
        next: () => {
          this.closeForm();
        },
        error: () => {
          this.isSaving = false;
          this.saveText = 'Save';
          this.errorMessage = 'Could not edit Engineer!';
        },
      });
    } else {
      this.errorMessage = 'Please fill all fields';
    }
  }
}
