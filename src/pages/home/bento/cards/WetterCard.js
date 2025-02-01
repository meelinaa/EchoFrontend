import React, { useEffect, useState } from "react";
import "./card.css";
import "./Wetter.css";

export default function WetterCard() {
  const [city, setCity] = useState("Kassel");
  const [temp, setTemp] = useState(null);

  const apiKey = "395338a044ad2a1170e49956536e4f78";

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error("Wetterdaten konnten nicht geladen werden.");
        }
        const data = await response.json();
        setTemp(Math.round(data.main.temp)); 
      } catch (error) {
        console.error("Fehler beim Abrufen der Wetterdaten:", error);
        setTemp("N/A");
      }
    }

    fetchWeather();
  }, [city]);

  return (
    <div className="card traum">
      <div className="wetter-top">
        <p>{city}</p>
      </div>
      <div className="wetter-mitte">
        <h1>{temp !== null ? `${temp}°C` : "Lädt..."}</h1>
      </div>
    </div>
  );
}
