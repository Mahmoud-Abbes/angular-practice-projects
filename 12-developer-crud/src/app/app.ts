import { Component } from '@angular/core';
import { EngineerList } from './components/engineer-list/engineer-list';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { AddForm } from './components/add-form/add-form';
import { EditForm } from './components/edit-form/edit-form';
import { SoftwareEngineer } from './models/software-engineer.model';

@Component({
  selector: 'app-root',
  imports: [EngineerList, Header, Footer, AddForm, EditForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isAdding: boolean = false;
  isEdeting: boolean = false;

  isAddEnabled(): boolean {
    return !this.isAdding && !this.isEdeting;
  }

  editedEngineer: SoftwareEngineer | undefined;

  toggleEditMode() {
    this.isEdeting = !this.isEdeting;
  }

  toggleAddingMode() {
    this.isAdding = !this.isAdding;
  }

  setEditedEngineer(editedEngineer: SoftwareEngineer) {
    if (editedEngineer) {
      this.editedEngineer = editedEngineer;
    }
  }

  closeEditForm() {
    this.isEdeting = false;
    this.editedEngineer = undefined;
  }
}
