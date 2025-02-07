import { parse, format } from "date-fns";

class TrinkenFetch {

    async getTrinkenDaten(heute){
        console.log(heute + "heute")
        const parsedDate = parse(heute, "d.M.yyyy", new Date());
        console.log(parsedDate + "parsedDate")
        const formattedDate = format(parsedDate, "yyyy-MM-dd");
        console.log(formattedDate + "formattedDate")

        const response = await fetch(`http://localhost:8080/trinken/${formattedDate}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    async setTrinkenDaten(datum, liter, becher) {
        if (!datum || !liter || !becher) {
            throw new Error('Fehler: ungültiger oder fehlender Parameter');
        }
        try {
            const parsedDate = parse(datum, "d.M.yyyy", new Date());
            const formattedDate = format(parsedDate, "yyyy-MM-dd");

            const response = await fetch(`http://localhost:8080/trinken/hinzufügen`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    datum: formattedDate,
                    liter: liter,
                    becher: becher,
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

export default TrinkenFetch;