import { useState, useEffect } from 'react'
import './fetch.css'

export default function Fetch() {
    const [callData, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
      fetchData();
    }, []);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } 
    
    const dataSet = callData.data;


    function Button() {
    return (
        <button
        onClick={() => alert('Button with adjusted color pressed')}
        title='coole-button'
        color="#96e6c2"
        >{button}</button>
      );
    }

    function DataConcept() { // Make this value input the array? 
      return (
        <>
        <h4>Name:</h4>
          <p>{dataSet[1].name}</p>
        <h4>Release Date:</h4>
          <p>{dataSet[1].released_date}</p>
        <h4>Description:</h4>
          <p>{dataSet[1].description}</p>
        </>
      );
    }
   

    return (
      <DataConcept />
    );
  }