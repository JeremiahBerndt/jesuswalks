import React, { useState, useEffect } from 'react';
import './Quote.css';
import AnswerModal from '../Modal/Modal.jsx';
import axios from 'axios';

import kanyeImg from '../../../images/kanyehead-cutout.png';
import bibleImg from '../../../images/Bible-cutout.png';

export default function Quote ({ quote, answer, credit, setCredit }) {
  const [show, setShow] = useState(false);
  const [correct, setCorrect] = useState('');

  const checkAnswer = (e) => {
    if (e.target.name != answer) {
      setCorrect('Incorrect');
    } else {
      setCorrect('Correct!');
    }
    setShow(true);
    setCredit(true);
  }

  return (
    <>
    {quote &&
    <div className="quote">
      <img name="Kanye West" onClick={checkAnswer} src={kanyeImg}></img>
      <div>
        <div>{ `"${quote}"` }</div>
        { credit && <div>{`-${answer}`}</div> }
      </div>
      <img name="The Holy Bible" onClick={checkAnswer} src={bibleImg}></img>
    </div>}
    <AnswerModal { ...{ setShow, show, correct }}/>
    </>
  )
}