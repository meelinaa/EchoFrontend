import { parse, format } from "date-fns";

class SchritteFetch {

    async getSchritteDaten(heute){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/schritte/${formattedDate}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    async setSchritteDaten(datum, schritte, meter) {
        if (!datum || !schritte || !meter) {
            throw new Error('Fehler: ungültiger oder fehlender Parameter');
        }
        try {
            const parsedDate = parse(datum, "d.M.yyyy", new Date());
            const formattedDate = format(parsedDate, "yyyy-MM-dd");

            const response = await fetch(`http://localhost:8080/schritte/hinzufügen`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    datum: formattedDate,
                    schritte: schritte,
                    meter: meter,
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
            console.error("Fehler bei der Daten:", error);
            throw error; 
        }
    }
}

export default SchritteFetch;