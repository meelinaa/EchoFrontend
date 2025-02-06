import React from 'react'
import TrinkenAnalyse from './analyseDaten/trinken/TrinkenAnalyse'

export default function DatenAnalyse() {
  return (
    <div className="analyse-layout">
        <div className="analyse-top">
            <h1>Analyse</h1>
        </div>

        <div className="analyse-mitte">
            <TrinkenAnalyse/>
        </div>
    </div>
  )
}
