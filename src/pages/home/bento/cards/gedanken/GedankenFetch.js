class GedankenFetch {
    
    async getGedankenDaten(heute){
        const response = await fetch(`http://localhost:8080/gedanken/${heute}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }
    
    async setGedankenDaten(datum, gedanken){
        if (!datum || !gedanken) {
            throw new Error('Fehler: ungültiger oder fehlender Parameter');
        }
        try {
            const response = await fetch(`http://localhost:8080/gedanken/hinzufügen`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    datum: datum,
                    gedanken: gedanken,
                }),
            });
    
            if (!response.ok) {
                throw new Error(`Fehler beim Speichern der Daten: ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log("Daten erfolgreich gespeichert:", data);
            return data;
        } catch (error) {
            console.error("Fehler bei der Daten:", error);
            throw error; 
        }
    }
}