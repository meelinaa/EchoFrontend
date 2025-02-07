class TrinkenAnalyseFetch {
    
    async getTageAnalyse(heute){
            const parsedDate = parse(heute, "d.M.yyyy", new Date());
            const formattedDate = format(parsedDate, "yyyy-MM-dd");
    
            const response = await fetch(`http://localhost:8080/gedanken/${formattedDate}`);
            if (!response.ok) {
                throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
            }
            return await response.json();
        }
}