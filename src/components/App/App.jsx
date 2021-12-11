import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Quote from '../Quote/Quote.jsx';

export default function App () {
  const [answer, setAnswer] = useState('');
  const [quote, setQuote] = useState('');
  const [verseNum, setVerseNum] = useState(0);
  const [credit, setCredit] = useState(false);

  // this is how useEffect models componentDidMount i.e. code inside CB and use of []
  useEffect(() => {
    getQuote();
  }, []);

  const getKanye = async () => {
    try {
      const resKanye = await axios.get('http://localhost:3000/kanye');
      // console.log('kanye quote', resKanye.data);
      setQuote(resKanye.data)
    } catch (err) {
      console.log(err);
    }
  }

  const getBible = async () => {
    try {
      const resBible = await axios.get('http://localhost:3000/bible');
      console.log('bible quote', resBible.data)
      if (verseNum < 2) {
        let nextVerse = verseNum + 1
        setVerseNum(nextVerse)
      }
      console.log('verse', verseNum)
      setQuote(resBible.data[verseNum].text);
    } catch (err) {
      console.log(err);
    }
  }

  const getQuote = () => {
    setCredit(false);
    const pressIt = document.querySelector('.quote-button')
    pressIt.classList.add('pressed');
    if (Math.floor(Math.random() * 2)) {
      getKanye()
      setAnswer('Kanye West')
    } else {
      getBible()
      setAnswer('The Holy Bible')
    }
  }

  return (
    <>
    <div className="App-header">
      <a href="https://fontmeme.com/the-price-is-right-font/"><img src="https://fontmeme.com/permalink/211209/f8b3568114733ab1b2d60563e52c7b5b.png" alt="the-price-is-right-font" border="0"></img></a>
      <a href="https://fontmeme.com/the-price-is-right-font/"><img src="https://fontmeme.com/permalink/211211/7fece759862c0abee692477a28c161b8.png" alt="the-price-is-right-font" border="0"></img></a>
      <p>The game where you guess if a quote is attributed to 21-time Grammy-award-winning Rapper/Producer Kanye West or The Holy Bible</p>
      <button className="quote-button" onClick={getQuote}><span>Next Quote!</span></button>
    </div>
    <Quote { ...{ quote, answer, credit, setCredit } }/>
    <div>
    </div>

    </>
  );
}