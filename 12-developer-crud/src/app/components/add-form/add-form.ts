import { Component, EventEmitter, Output } from '@angular/core';
import { CreateEngineerDTO } from '../../models/software-engineer.model';
import { FormsModule } from '@angular/forms';
import { EngineerService } from '../../services/engineer.service';

@Component({
  selector: 'app-add-form',
  imports: [FormsModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.scss',
})
export class AddForm {
  constructor(private engineerService: EngineerService) {}

  @Output() toggleAdd = new EventEmitter<void>();

  saveText: string = 'Save';
  isSaving: boolean = false;
  errorMessage: string = "";

  newSoftwareEngineer: CreateEngineerDTO = { name: '', techStack: '' };

  save() {
    if (this.newSoftwareEngineer.name && this.newSoftwareEngineer.techStack) {
      this.saveText = 'Saving...';
      this.isSaving = true;
      this.errorMessage = ""; 

      this.engineerService.addEngineer(this.newSoftwareEngineer).subscribe({
        next: () => {
          this.toggleAdd.emit();
        },
        error: () => {
          this.saveText = 'Save';
          this.isSaving = false;
          this.errorMessage = "Could not add Engineer!";
        },
      });
    } else {
      this.errorMessage = "Please fill all fields";
    }
  }

  closeForm(){
    this.toggleAdd.emit();
  }
}
