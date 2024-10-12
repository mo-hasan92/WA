$(document).ready(function(){
    let nextId = 6; // Startet bei 3, da es schon 2 Einträge gibt

    $('#speichernBtn').click(function(){
        // Eingabewerte aus dem Formular lesen
        const marke = $('#marke').val().trim();
        const getriebe = $('#getriebe').val().trim();
        const fahrzeugtyp = $('#fahrzeugtyp').val().trim();
        const kilometerstand = $('#kilometerstand').val().trim();
        const erstzulassungsjahr = $('#erstzulassungsjahr').val().trim();

        // Validierung: Alle Felder müssen ausgefüllt sein
        if (!marke || !getriebe || !fahrzeugtyp || !kilometerstand || !erstzulassungsjahr) {
            alert("Bitte füllen Sie alle Felder aus.");
            return;
        }

        // Neue Zeile erstellen und zur Tabelle hinzufügen
        const newRow = `
            <tr>
                <th scope="row">${nextId}</th>
                <td>${marke}</td>
                <td>${getriebe}</td>
                <td>${fahrzeugtyp}</td>
                <td>${kilometerstand}</td>
                <td>${erstzulassungsjahr}</td>
            </tr>
        `;
        $('#car-table-body').append(newRow);

        // ID erhöhen
        nextId++;

        // Formular zurücksetzen
        $('#marke').val('');
        $('#getriebe').val('');
        $('#fahrzeugtyp').val('');
        $('#kilometerstand').val('');
        $('#erstzulassungsjahr').val('');
    });
});