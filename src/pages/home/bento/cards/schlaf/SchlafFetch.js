import { parse, format } from "date-fns";

class SchlafFetch {

    async getSchlafDaten(heute){
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        const formattedDate = format(parsedDate, "yyyy-MM-dd");

        const response = await fetch(`http://localhost:8080/schlaf/${formattedDate}`);
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
            const formattedTime = format(parse(schlafenszeit, "HH:mm", new Date()), "HH:mm:ss");
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
                    schlafenszeit: formattedTime,
                    benutzer: { id: 1 }
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

export default SchlafFetch;