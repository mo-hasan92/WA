import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, orderBy } from '@angular/fire/firestore';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { Observable } from 'rxjs';

// Interface für eine Nachricht in Firestore
export interface Message {
  author: string;
  text: string;
  timestamp: number | { seconds: number; nanoseconds: number }; // Firebase Timestamp Typ
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

  // Nachrichten abrufen (sortiert nach timestamp)
  getMessages(): Observable<Message[]> {
    const messagesCollection = collection(this.firestore, 'room_1');
    const messagesQuery = query(messagesCollection, orderBy('timestamp'));
    return collectionData(messagesQuery, { idField: 'id' }) as Observable<Message[]>;
  }

  // Neue Nachricht hinzufügen
  async sendMessage(author: string, text: string): Promise<void> {
    const messagesCollection = collection(this.firestore, 'room_1');
    const message = {
      author: author,
      text: text,
      timestamp: serverTimestamp(), // Server-Timestamp
    };

    try {
      await addDoc(messagesCollection, message); // Nachricht in Firestore hinzufügen
    } catch (error) {
      console.error('Fehler beim Hinzufügen der Nachricht:', error);
    }
  }

  // Liste der Autoren abrufen (eindeutige Autoren)
  async getAuthors(): Promise<string[]> {
    const messagesCollection = collection(this.firestore, 'room_1');

    try {
      // Abrufen der Nachrichten
      const messages = await collectionData(messagesCollection, { idField: 'id' }).toPromise();

      // Sicherstellen, dass `messages` nicht `undefined` ist
      if (!messages) {
        return []; // Wenn keine Daten vorliegen, geben wir eine leere Liste zurück
      }

      // Nachrichten filtern und Autoren extrahieren
      const authors = messages
        .filter((message: any): message is Message => typeof message.author === 'string') // Typprüfung
        .map((message: Message) => message.author); // Nur Autoren extrahieren

      // Duplikate entfernen und zurückgeben
      return [...new Set(authors)];
    } catch (error) {
      console.error('Fehler beim Abrufen der Autoren:', error);
      return []; // Fehlerfall: leere Liste zurückgeben
    }
  }

}
