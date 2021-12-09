import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quote ({ quote }) {
  console.log('verse', quote)
  return (
    <>
    {quote &&
    <div className="quote">
      <img src={kanyeImg}></img>
      <div>{ verse }</div>
      <img src={bibleImg}></img>
    </div>}
    </>
  )
}