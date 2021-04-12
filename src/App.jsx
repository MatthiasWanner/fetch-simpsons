import React, { useState } from 'react'
import './App.css'
import axios from 'axios';
import QuoteCard from './components/QuoteCard';

const quote = {
  quote: 'Oh, so they have Internet on computers now!',
  character: 'Homer Simpson',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  characterDirection: 'Right',
  };

function App() {
  const getRandomQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')

      // Extract the DATA from the received response
      .then((response) => response.data)
  
      // Use this data to update the state
      .then((data) => {
        setQuote(data[0]);
      });
  
  };
  const [quote, setQuote] = useState(getRandomQuote);


  return (
    <div className="App">
      <button onClick={getRandomQuote}>
        Get a quote
      </button>
      <QuoteCard {...quote} />
    </div>
  )
}

export default App
