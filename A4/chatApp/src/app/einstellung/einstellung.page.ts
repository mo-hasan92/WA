import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-einstellung',
  templateUrl: './einstellung.page.html',
  styleUrls: ['./einstellung.page.scss'],
})
export class EinstellungPage implements OnInit {

  username: string = '';
  errorMessage: string = '';

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  async saveUsername() {
    // Liste der Autoren aus Firestore abrufen
    const authors = await this.firestoreService.getAuthors();

    // Überprüfen, ob der Name bereits verwendet wird
    if (authors.includes(this.username.trim())) {
      this.errorMessage = 'Dieser Benutzername wird bereits verwendet. Bitte wähle einen anderen.';
    } else {
      this.errorMessage = '';  // Fehler zurücksetzen
      localStorage.setItem('username', this.username.trim());  // Benutzername speichern
      alert('Benutzername erfolgreich gespeichert!');
    }
  }

}
