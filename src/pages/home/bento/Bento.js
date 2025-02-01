import React from 'react'
import TrinkenCard from './cards/TrinkenCard';
import SchritteCard from './cards/SchritteCard';
import WetterCard from './cards/WetterCard';
import SchlafCard from './cards/SchlafCard';
import GedankenCard from './cards/GedankenCard';
import SportCard from './cards/SportCard';
import GemuetCard from './cards/GemuetCard';
import TraumCard from './cards/TraumCard';

import './Bento.css';

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
