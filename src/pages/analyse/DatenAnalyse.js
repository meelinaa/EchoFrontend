import React from 'react'
import TrinkenAnalyse from './analyseDaten/trinken/TrinkenAnalyse'
import GedankenAnalyse from './analyseDaten/gedanken/GedankenAnalyse'
import SchlafAnalyse from './analyseDaten/schlaf/SchlafAnalyse'
import TraumAnalyse from './analyseDaten/traum/TraumAnalyse'
import SchritteAnalyse from './analyseDaten/schritte/SchritteAnalyse'
import SportAnalyse from './analyseDaten/sport/SportAnalyse'

import './DatenAnalyse.css';


export default function DatenAnalyse() {
  return (
    <div className="datenAnalyse-layout">
        <div className="datenAnalyse-top">
            <h1>Analyse</h1>
        </div>

        <div className="datenAnalyse-mitte">
            <TrinkenAnalyse/>
            <TraumAnalyse/>
            <SportAnalyse/>
            <SchritteAnalyse/>
            <GedankenAnalyse/>
            <SchlafAnalyse/>
        </div>
    </div>
  )
}
