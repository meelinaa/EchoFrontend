import { parse, format } from "date-fns";

class SportFetch {

    async getSportDaten(datum){
        const parsedDate = parse(datum, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");
        
        const response = await fetch(`http://localhost:8080/sport/${formattedDate}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }
    
    async setSportDaten(datum, trainingsDauer, sportart) {
        if (!datum || !trainingsDauer || !sportart) {
            throw new Error('Fehler: ungültiger oder fehlender Parameter');
        }
        try {
            const parsedDate = parse(datum, "d.M.yyyy", new Date());
            const formattedDate = format(parsedDate, "yyyy-MM-dd");

            const response = await fetch(`http://localhost:8080/sport/hinzufügen`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    datum: formattedDate,
                    trainingsDauer: trainingsDauer,
                    sportart: sportart,
                    benutzer: { id: 1 },
                }),
            });
    
            if (!response.ok) {
                throw new Error(`Fehler beim Speichern der Daten: ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log("Daten erfolgreich gespeichert:", data);
            return data;
        } catch (error) {
            console.error("Fehler bei den Daten:", error);
            throw error; 
        }
    }

    
}

export default SportFetch;