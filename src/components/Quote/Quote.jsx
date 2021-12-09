import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quote () {

  const getVerse = () => {
    axios.get('https://devotionalium.com/api/v2')
      .then(result => {
        console.log('this result', result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (

  )
}