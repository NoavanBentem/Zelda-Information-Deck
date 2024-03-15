import { useState, useEffect } from 'react'
import './App.css'
import Fetch from './assets/components/Fetch';


import zeldaLogo from './assets/images/zelda-logo-ww.png';




const adjectiveOptions = ['Awesome', 'Cool', 'Superb'];
const buttonTexts = ['Hell yeah!', 'Iwant that!', 'Give me!', 'Show me what you got!'];

function genRandomAdjective(max) {
  return Math.floor(Math.random() * (max + 1));
}

function ApiDeck() {
  const adjetive = adjectiveOptions[genRandomAdjective(2)];
  const button = buttonTexts[genRandomAdjective(3)];

  return (
  <div id='apiDeck'>
    <img className='head-image' src={zeldaLogo} alt='Zelda Logo'/> 
    <h1>{adjetive} Zelda Deck</h1>
    <h3>Info about a random Zelda game?</h3>
  

    <button
    onClick={() => alert('Button with adjusted color pressed')}
    title='coole-button'
    color="#96e6c2"
    >{button}</button>


  </div>
  );
}

function App() {
  return (
    <>
      <ApiDeck />
      <Fetch />
    </>
  )
}

//console.log(dataSet[0]);

export default App
