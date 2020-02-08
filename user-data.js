﻿"use strict";

const userData = () => {

   const defaultPasswordLength = 16;
   const basicCharacterRepertoire = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   const strongCharacterRepertoire = "!#$%&()+-0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^abcdefghijkmnopqrstuvwxyz|~/";
   const easiestCharacterRepertoire = "0123456789abcdefghijkmnopqrstuvwxyz";
   const easyCharacterRepertoire =    "0123456789abcdefghijkmnopqrstuvwxyz[]-=/";
      
   return {
      accounts: [
         {
            identity: { seed: "MDB 2020/02/07",
               start: 3, length: 15, shift: 1 },
            display: { name: "Most Dependable Bank", url: "http://www.MostDependableBank.com", userName: "Responsible-bank-user" }
         },
         {
            identity: { seed: "WikipediA 2020/02/12 13:16",
               start: 0, length: 12, shift: 201 },
            display: { name: "WikipediA", url: "https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page", userName: "me" }
         },
         {
            identity: { seed: "GitHub 2020/02/12",
               start: 1, length: 16, shift: 0 },
            display: { name: "GitHub", url: "https://github.com", userName: "me" }
         },
      ], // accounts    
      default: {
         identity: { seed: "ERROR! define seed!",
            characterRepertoire: strongCharacterRepertoire, 
            start: 0, length: defaultPasswordLength, shift: 0,
         },
         display: { name: "Incomplete account", url: "https://www.undefined.account", userName: "unknown user" }
      },
   }; //data
   
};