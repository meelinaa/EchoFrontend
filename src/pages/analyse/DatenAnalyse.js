import React from 'react'
import TrinkenAnalyse from './analyseDaten/trinken/TrinkenAnalyse'
import GedankenAnalyse from './analyseDaten/gedanken/GedankenAnalyse'
import SchlafAnalyse from './analyseDaten/schlaf/SchlafAnalyse'
import TraumAnalyse from './analyseDaten/traum/TraumAnalyse'
import SchritteAnalyse from './analyseDaten/schritte/SchritteAnalyse'
import SportAnalyse from './analyseDaten/sport/SportAnalyse'

export default function DatenAnalyse() {
  return (
    <div className="analyse-layout">
        <div className="analyse-top">
            <h1>Analyse</h1>
        </div>

        <div className="analyse-mitte">
            <TrinkenAnalyse/>
            <GedankenAnalyse/>
            <SchlafAnalyse/>
            <TraumAnalyse/>
            <SchritteAnalyse/>
            <SportAnalyse/>
        </div>
    </div>
  )
}
