import React from 'react';
import './Main.css';
import backgroundImg from '../../zodiacbackground.jpg';
import Zodiac from '../Zodiac/Zodiac.js';
import { zodiac } from '../../zodiacdata.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {zodiac.map((zodiac) => (
        <Zodiac key={zodiac.name} {...zodiac} />
      ))}
    </main>
  );
}