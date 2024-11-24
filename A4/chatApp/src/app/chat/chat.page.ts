import { Component, OnInit } from '@angular/core';
import { FirestoreService, Message } from '../services/firestore.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages: Message[] = [];

  newMessage: string = '';

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.firestoreService.getMessages().subscribe((data) => {
      this.messages = data;
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const storedUsername = localStorage.getItem('username');
      if (!storedUsername) {
        alert('Bitte wähle zuerst einen Nutzernamen in den Einstellungen!');
        return;
      }
      const author = storedUsername;
      const text = this.newMessage.trim();

      this.firestoreService.sendMessage(author, text).then(() => {
        this.newMessage = '';  // Leere das Eingabefeld nach dem Senden
      }).catch(error => {
        console.error('Fehler beim Senden der Nachricht:', error);
      });
    }
  }


}
