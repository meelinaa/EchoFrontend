class TraumFetch {
    
    async getTraumDaten(heute){
        const response = await fetch(`http://localhost:8080/traum/${heute}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }
    
    async setTraumDaten(datum, bewertung, traum) {
        if (!datum || !bewertung || !traum) {
            throw new Error('Fehler: ungültiger oder fehlender Parameter');
        }
        try {
            const response = await fetch(`http://localhost:8080/traum/hinzufügen`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    datum: datum,
                    bewertung: bewertung,
                    traum: traum,
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