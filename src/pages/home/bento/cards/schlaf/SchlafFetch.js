class SchlafFetch {

    async getSchlafDaten(heute){
        const response = await fetch(`http://localhost:8080/schlaf/${heute}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    
    async setSchlafDaten(datum, schlafenszeit) {
        if (!datum || !schlafenszeit) {
            throw new Error('Fehler: ungültiger oder fehlender Parameter');
        }
        try {
            const response = await fetch(`http://localhost:8080/sport/hinzufügen`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    datum: datum,
                    schlafenszeit: schlafenszeit,
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