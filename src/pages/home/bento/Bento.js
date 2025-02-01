import React from 'react'
import TrinkenCard from './cards/trinken/TrinkenCard';
import WetterCard from './cards/wetter/WetterCard';
import SchlafCard from './cards/schlaf/SchlafCard';
import GedankenCard from './cards/gedanken/GedankenCard';
import SportCard from './cards/sport/SportCard';
import GemuetCard from './cards/gemüt/GemuetCard';
import TraumCard from './cards/traum/TraumCard';

import './Bento.css';
import SchritteCard from './cards/schritt/SchritteCard';

export default function Bento() {
  return (
    <div className="home-mitte">
        <div class="bento-grid">
            <div class="bento-item gedanken"><GedankenCard/></div>
            <div class="bento-item gemut"><GemuetCard/></div>
            <div class="bento-item schritte"><SchritteCard/></div>
            <div class="bento-item traume"><TraumCard/></div>
            <div class="bento-item wetter"><WetterCard/></div>
            <div class="bento-item trinken"><TrinkenCard/></div>
            <div class="bento-item schlaf"><SchlafCard/></div>
            <div class="bento-item sport"><SportCard/></div>
        </div>
    </div>
  )
}
