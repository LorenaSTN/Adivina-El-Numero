"use strict";

const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input"); 
const clue = document.querySelector(".js-pista");
const tries = document.querySelector(".js-intentos");



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);

};

const randomNumber = getRandomNumber(100);
console.log(randomNumber); 



let accumulator = 0;



function handleCheckingRamdomNumber (event) {
    event.preventDefault();
    
    const userInput = parseInt(input.value);
   
    console.log(userInput);
   
    // console.log("ha hecho click");
    if (userInput == randomNumber){
        clue.innerHTML = "¡Has ganado campeona!";
    }else if (!userInput){
        clue.innerHTML = "Por favor, introduce un número";
    }else if (userInput > 100 || userInput < 0) {
        clue.innerHTML = "El número debe estar entre 1 y 100";
    }else if (userInput > randomNumber){
        clue.innerHTML = "Pista: Demasiado alto";
    }else if (userInput < randomNumber){
        clue.innerHTML = "Pista: Demasiado bajo";
    };

    accumulator++;

    tries.innerHTML = `Número de intentos: ${accumulator}`
};





button.addEventListener("click", handleCheckingRamdomNumber);












