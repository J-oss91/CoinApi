import React from 'react'
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Price(props) {


   //use coinapi.io api key
   const apiKey = "82B3B31D-12B8-4F3F-9B30-4CDC68351E87";

   //Grab the Currency symbol from the URL Params
    const params = useParams()
    const symbol = params.symbol
   
   
    // Using the other two varibles to create URL
   const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  

   //Set State to hold coin data
   const[coin, setCoin] = useState("null")

   //Creat a function to get coin data
   const getCoin = async () => {
     const response = await fetch(url);
     const data = await response.json();
     setCoin(data);
   };

  //  const getCoin =  async () => {
  //   try{
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setCoin(data);
  //   } catch (e){
  //     console.error(e)
  //   }
  //  };

   //Use useEffect to run getCoin
   useEffect(() => {
    getCoin();
   }, []);
   
   //Loaded function for when data is fetched
   const loaded = () => {
     return(
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>
          {coin.rate}
        </h2>

      </div>
     );
   };

   // Function for data that does not exist
   const loading = () => {
    return(
      <h1> Loading...</h1>
    );
   };

   //If coin has data, run the loaded function, otherwise, run loaded function
   return (
    coin && coin.rate ? loaded() : loading()
  );
};
