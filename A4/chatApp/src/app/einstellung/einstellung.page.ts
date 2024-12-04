import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-einstellung',
  templateUrl: './einstellung.page.html',
  styleUrls: ['./einstellung.page.scss'],
})

export class EinstellungPage {

  username: string = ''; // Vom Nutzer eingegebener Name
  errorMessage: string = ''; // Fehlermeldung
  successMessage: string = ''; // Erfolgsmeldung

  constructor(private firestoreService: FirestoreService, private alertCtrl: AlertController) { }

  async saveUsername() {

    this.errorMessage = '';
    this.successMessage = '';

    if (!this.username.trim()) {
      this.errorMessage = 'Bitte einen gültigen Namen eingeben.';
      return;
    }

    try {
      // Autorenliste aus Firestore abrufen
      const authors = await this.firestoreService.getAuthors();

      // Prüfen, ob der Name bereits existiert
      if (authors.includes(this.username.trim())) {
        this.errorMessage = 'Dieser Name ist bereits vergeben. Bitte wähle einen anderen Namen.';
      } else {
        // Name in LocalStorage speichern
        localStorage.setItem('username', this.username.trim());
        this.successMessage = 'Dein Nutzername wurde erfolgreich gespeichert!';
      }
    } catch (error) {
      console.error('Fehler beim Speichern des Nutzernamens:', error);
      this.errorMessage = 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.';
    }
  }
}
