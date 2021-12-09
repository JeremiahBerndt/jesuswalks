import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';
import Quote from '../Quote/Quote.jsx';

export default function App () {
  const [verse, setVerse] = useState('');
  const [yeezy, setYeezy] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/bible')
      .then(result => {
        console.log('this result', result.data[1])
        setVerse(result.data[1].text)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <>
    <div className="App-header">
      <h1>Who Said It:</h1>
      <h2>Kanye West or The Holy Bible?</h2>
      <Quote verse={verse}/>
    </div>
    <div>
      <Vote/>
    </div>
    </>
  );
}