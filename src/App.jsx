import { useState, useEffect } from 'react'
import './App.css'


import zeldaLogo from './assets/images/zelda-logo-ww.png';

function ApiDeck() {
  

  const [callData, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [renderData, SetRenderData] = useState({name: '', released_date: '', description: ''});
  const [dataIndex, SetDataIndex] = useState(0);


  // Making Api call
  const fetchData = async () => {
    try {
      const response = await fetch('https://zelda.fanapis.com/api/games?limit=2');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calling Api 
    useEffect(() => {
      fetchData();
    }, []);
  
    // Managing different states
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    } 


    function handleClick() {
      // Make zeldaDataSet value go up
      let zeldaDataSet = dataIndex;
      zeldaDataSet++; 
      
      // zeldaDataSet value can't be more than array length
      if(zeldaDataSet >= callData.data.length) {
        zeldaDataSet = 0;
      }
      // Update state after checking so it won't be reset before it changes again
      SetDataIndex(zeldaDataSet);

      //console.log(zeldaDataSet);
      
      // Update state so it will rerender
      SetRenderData({ 
        ...renderData,
        name: callData.data[zeldaDataSet].name,
        released_date: callData.data[zeldaDataSet].released_date,
        description: callData.data[zeldaDataSet].description,
      });
    }


  // Randomized texts from arrays
  const btnTxtOptions = ['Hell yeah!', 'Yes', 'I want that!', 'Give me!'];

  function genRandomText(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const btnRandomText = btnTxtOptions[genRandomText(3)];

  return (
    <>
      <div id='apiDeck'>
        <img className='head-image' src={zeldaLogo} alt='Zelda Logo'/> 
        <h1>Zelda Information Deck</h1>
        <h3>Info about a random Zelda game?</h3>

        <button
              onClick={handleClick}
              title='coole-button'
              color="#3FA06B"
              >{btnRandomText}</button>


        <h4>Name:</h4>
        <p>{renderData.name}</p>
        <h4>Release Date:</h4>
        <p>{renderData.released_date}</p>
        <h4>Description:</h4>
        <p>{renderData.description}</p>
    
      </div>
    </>
  );
}



function App() {
  return (
    <>
      <ApiDeck /> 
    </>
  )
}

export default App
