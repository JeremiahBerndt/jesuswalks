import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Quote from '../Quote/Quote.jsx';
import kanyeImg from '../../../images/kanyehead-cutout.png';
import bibleImg from '../../../images/Bible-cutout.png';

export default function App () {
  const [verse, setVerse] = useState('');
  const [yeezy, setYeezy] = useState('');
  const [quote, setQuote] = useState('');

  // this is how useEffect models componentDidMount i.e. code inside CB and use of []
  useEffect(() => {
    const getQuote = async () => {
      try {
        const resBible = await axios.get('http://localhost:3000/bible');
        setVerse(resBible.data[1].text);
        const resKanye = await axios.get('http://localhost:3000/kanye');
        console.log('kanye quote', resKanye.data);
        setYeezy(resKanye.data)
        // return resKanye.data;
      } catch (err) {
        console.log(err);
        return 'something went wrong';
      }
    }
    getQuote();

  }, []);

  const quotePress = () => {
    const pressIt = document.querySelector('.quote-button')
    pressIt.classList.add('pressed');
    Math.floor(Math.random() * 2) ? setQuote(yeezy) : setQuote(verse);
  }

  return (
    <>
    <div className="App-header">
      <a href="https://fontmeme.com/the-price-is-right-font/"><img src="https://fontmeme.com/permalink/211209/f8b3568114733ab1b2d60563e52c7b5b.png" alt="the-price-is-right-font" border="0"></img></a>
      <h2>Kanye West or The Holy Bible?</h2>
      <p>The game where you guess if the quote can be attributed to Kanye West or The Holy Bible</p>
      <button className="quote-button" onClick={quotePress}><span>Start!</span></button>
    </div>
    <Quote quote={ quote }/>
    <div>
      {/* <Vote/> */}
    </div>
    </>
  );
}