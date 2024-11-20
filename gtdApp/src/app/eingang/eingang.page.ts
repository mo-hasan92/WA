import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../interface/task';

@Component({
  selector: 'app-eingang',
  templateUrl: './eingang.page.html',
  styleUrls: ['./eingang.page.scss'],
})
export class EingangPage implements OnInit {

   // Variablen zum Hinzufügen und Bearbeiten von Aufgaben
   isModalOpen = false;
   taskTitle = '';
   taskDescription = '';
   tasks: Task[] = [];
   modalTitle = 'New Task';
   isEditing = false;
   editingIndex: number | null = null;
   dueDate: Date | null = null;
   priority = 'medium';
 
   constructor(private taskService: TaskService) {}
 
   // Initialisiere die Tasks, wenn die Seite geladen wird
   ngOnInit() {
     this.taskService.tasks$.subscribe(tasks => {
       this.tasks = tasks;
     });
   }

  // Öffnet das Modal für eine neue oder bestehende Aufgabe
  openModal(index: number | null) {
    this.isModalOpen = true;
    if (index !== null) {
      // Bearbeitungsmodus aktivieren
      const task = this.tasks[index];
      this.modalTitle = 'Edit Task';
      this.isEditing = true;
      this.editingIndex = index;
      this.taskTitle = task.title;
      this.taskDescription = task.description;
      this.dueDate = task.dueDate;
      this.priority = task.priority;
    } else {
      // Reset, wenn eine neue Aufgabe erstellt wird
      this.resetForm();
    }
  }

  // Schließt das Modal und setzt das Formular zurück
  closeModal() {
    this.isModalOpen = false;
    this.resetForm();
  }
 
   // Funktion zum Bearbeiten einer Aufgabe
   editTask(index: number) {
     const task = this.tasks[index];
     this.modalTitle = 'Edit Task';
     this.isEditing = true;
     this.editingIndex = index;
     this.taskTitle = task.title;
     this.taskDescription = task.description;
     this.dueDate = task.dueDate;
     this.priority = task.priority;
   }
 
   // Funktion zum Hinzufügen einer neuen Aufgabe
   addNewTask() {
     this.resetForm();
     this.modalTitle = 'New Task';
     this.isEditing = false;
   }
 
   // Funktion zum Speichern der Aufgabe (Erstellen oder Bearbeiten)
   saveTask() {
     if (this.taskTitle.trim() !== '') {
       const newTask: Task = {
         title: this.taskTitle,
         description: this.taskDescription,
         dueDate: this.dueDate,
         delegated: false,
         priority: this.priority
       };
 
       if (this.isEditing && this.editingIndex !== null) {
         // Bearbeiten
         this.taskService.updateTask(this.editingIndex, newTask);
       } else {
         // Hinzufügen
         this.taskService.addTask(newTask);
       }
       this.resetForm();
     }
   }
 
   // Funktion zum Löschen einer Aufgabe
   deleteTask(index: number) {
     this.taskService.deleteTask(index);
   }
 
   // Zurücksetzen des Formulars
   resetForm() {
     this.taskTitle = '';
     this.taskDescription = '';
     this.dueDate = null;
     this.isEditing = false;
     this.editingIndex = null;
     this.priority = 'medium';
   }
 }
