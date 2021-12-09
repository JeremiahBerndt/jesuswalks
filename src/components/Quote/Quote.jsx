import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quote ({ verse }) {

  return (
    <div>{verse}</div>
  )
}