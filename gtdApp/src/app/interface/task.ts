export interface Task {
title: string;          // Titel der Aufgabe
description: string;    // Beschreibung der Aufgabe
dueDate: Date | null;   // Fälligkeitsdatum der Aufgabe (optional, daher kann null sein)
delegated: boolean;     // Ob die Aufgabe delegiert wurde oder nicht
priority: string;       // Priorität der Aufgabe (z. B. "hoch", "mittel", "niedrig")
}
