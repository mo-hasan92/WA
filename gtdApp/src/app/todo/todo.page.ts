import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../interface/task';
import { AlertController, ModalController } from "@ionic/angular";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  tasks: Task[] = [];


  constructor(
    private taskService: TaskService, 
    private alertController: AlertController,
    private modalController: ModalController // Um das Modal zu öffnen
  ) { }

  ngOnInit() {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks.filter(task => !task.delegated).sort(this.compareTasksByDueDate);
    });
  }
  compareTasksByDueDate(a: Task, b: Task): number {
    const dueDateA = a.dueDate ? new Date(a.dueDate) : null;
    const dueDateB = b.dueDate ? new Date(b.dueDate) : null;

    if (!dueDateA && !dueDateB) return 0;
    if (!dueDateA) return 1;
    if (!dueDateB) return -1;
    return dueDateA.getTime() - dueDateB.getTime();
  }

  async editTask(index: number) {
  
  }

  async deleteTask(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this task?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.taskService.deleteTask(index);
          }
        }
      ]
    });

    await alert.present();
  }
}


