class KontoFetch {

    async getAllgemeineDaten(){
        const response = await fetch(`http://localhost:8080/allgemein/alles`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    async setAllgemeineDaten(name, größe, alter, geschlecht, bmi, gewicht){
        if (!name || !größe || !alter || !geschlecht || !bmi || !gewicht) {
            throw new Error('Fehler: ungültiger oder fehlender Parameter');
        }
        try {
            const response = await fetch(`http://localhost:8080/allgemein/hinzufügen`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    größe: größe,
                    alter: alter,
                    geschlecht: geschlecht,
                    bmi: bmi,
                    gewicht: gewicht
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

export default KontoFetch;