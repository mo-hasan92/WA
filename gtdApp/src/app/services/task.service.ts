import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, from, take } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const storedTasks = await this.storage.get('tasks') || [];
    this.tasksSubject.next(storedTasks);
  }

  // Hinzufügen einer neuen Aufgabe
  addTask(task: Task) {
    this.tasks$.pipe(
      take(1),
      switchMap(tasks => {
        tasks.push(task);
        return from(this.saveTasks(tasks));
      })
    ).subscribe();
  }

  // Aktualisieren einer Aufgabe
  updateTask(index: number, task: Task) {
    this.tasks$.pipe(
      take(1),
      switchMap(tasks => {
        if (tasks[index] !== task) { // Nur speichern, wenn sich die Aufgabe wirklich geändert hat
          tasks[index] = task;
          return from(this.saveTasks(tasks));
        }
        return [];
      })
    ).subscribe();
  }

  // Löschen einer Aufgabe
  deleteTask(index: number) {
    this.tasks$.pipe(
      take(1),
      switchMap(tasks => {
        tasks.splice(index, 1);
        return from(this.saveTasks(tasks));
      })
    ).subscribe();
  }

  // Private Methode zum Speichern der Aufgaben im lokalen Speicher
  private async saveTasks(tasks: Task[]): Promise<void> {
    try {
      await this.storage.set('tasks', tasks);
      this.tasksSubject.next(tasks); // Die neuen Aufgaben werden an alle Abonnenten übermittelt
    } catch (error) {
      console.error('Fehler beim Speichern der Aufgaben:', error);
    }
  }

  // Zurücksetzen der Aufgaben
  async resetTasks() {
    this.tasksSubject.next([]);
    await this.storage.set('tasks', []);
  }
}
//Ein Service in Ionic (und Angular im Allgemeinen) wird verwendet, um die
// Geschäftslogik und Datenoperationen zu kapseln. Der TaskService könnte beispielsweise
// die Aufgaben verwalten, im LocalStorage speichern und abrufen.