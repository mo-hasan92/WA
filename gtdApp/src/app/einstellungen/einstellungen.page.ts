import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../interface/task';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-einstellungen',
  templateUrl: './einstellungen.page.html',
  styleUrls: ['./einstellungen.page.scss'],
})
export class EinstellungenPage implements OnInit {

  darkMode = false;

  constructor(
    private storage: Storage,
    private alertController: AlertController,
    private taskService: TaskService
  ) {}

  async ngOnInit() {
    // Beim Start prüfen, ob Dark Mode aktiv ist
    const storedDarkMode = await this.storage.get('darkMode');
    if (storedDarkMode !== null) {
      this.darkMode = storedDarkMode;
      this.toggleDarkMode(); // Wende den gespeicherten Modus an
    }
  }

  toggleDarkMode() {
    if (this.darkMode) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.removeAttribute('color-theme');
    }

    // Speichere den Dark Mode Status im localStorage
    this.storage.set('darkMode', this.darkMode);
  }

  async resetLocalStorage() {
    const alert = await this.alertController.create({
      header: 'Reset Local Storage',
      message: 'Are you sure you want to delete all stored data?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: async () => {
            try {
              await this.storage.clear();
              this.taskService.resetTasks();
              console.log('Local Storage and tasks have been reset.');
            } catch (error) {
              console.error('Error resetting Local Storage:', error);
            }
          },
        },
      ],
    });

    await alert.present();
  }
}