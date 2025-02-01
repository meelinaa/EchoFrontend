import React from 'react';

import './Home.css';
import Bento from './bento/Bento';
import Begrüßung from './begrüßung/Begrüßung';

export default function Home() {
  return (
    <div className='home-body'>
      <Begrüßung/>
      <Bento/>
    </div>
  )
}
