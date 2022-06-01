// Created by: Madeleine Forgeron 
// Created on: June 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function factorial() {
  	// initialize the counter
	let counter = 1
  let factorial = 1
	

	
	// get the user number
	let userNum = parseInt(document.getElementById('userNum').value)	

	// use a do..while loop to create the final sentence display
	do {

		factorial = factorial * counter 
		
		counter = counter + 1
	} while (counter <= userNum)

  	// return the string of sentences back to html
  	document.getElementById('output').innerHTML = "The factorial of the number you inputted is: " + factorial
}