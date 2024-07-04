"use strict";


/*
1. Cuando la usuaria haga click en el boton prueba
2. recogemos el numero


*/

const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input"); 
const clue = document.querySelector(".js-pista");
const tries = document.querySelector(".js-intentos");



function getRandomNumber(max = 100) {
    return Math.ceil(Math.random() * max);

};

const randomNumber = getRandomNumber();
console.log(randomNumber); 




function handleCheckingRamdomNumber (event) {
    event.preventDefault();

    const userInput = input.value;
   

    console.log(userInput);
   
    // console.log("ha hecho click");
    if (userInput == randomNumber){
        clue.innerHTML = "¡Has ganado campeona!";
    }else if (userInput > 100 || userInput < 0) {
        clue.innerHTML = "El número debe estar entre 1 y 100"
    }else if (userInput > randomNumber){
        clue.innerHTML = "Pista: Demasiado alto";
    }else if (userInput < randomNumber){
        clue.innerHTML = "Pista: Demasiado bajo";
    }
}





button.addEventListener("click", handleCheckingRamdomNumber);












