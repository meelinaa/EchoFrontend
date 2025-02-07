class AnalyseFetch {

    async getAlles(info){
        const response = await fetch(`http://localhost:8080/benutzer/${info}`);
        if (!response.ok) {
            throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
        }
        return await response.json();
    }

    
      

}

export default AnalyseFetch;