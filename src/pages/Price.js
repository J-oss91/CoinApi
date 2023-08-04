import React from 'react'
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Price(props) {


   //use coinapi.io api key
   const apiKey = "82B3B31D-12B8-4F3F-9B30-4CDC68351E87";

   //Grab the Currency symbol from the URL Params
    const params = useParams();
    const symbol = params.symbol;
   // Using the other two varibles to create URL
   const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`
  return (
    <div>
        <h1>This is the Price component</h1>
    </div>
  )
};
