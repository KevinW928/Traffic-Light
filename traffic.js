"use strict";

var colours = [ "#FF4500", "#656565", "#ADFF2F" ]; // colour sequencing //

var n = 0;  // state inital variable in colour sequence //

// var Red = document.getElementById("red"); // 
// var Yellow = document.getElementById("yellow"); //
//  Green = document.getElementById("green"); // 


														// Starting at red, want to increment by 1 to get to green. Once it hits 			green, decrement back down to red //  

																// Have no idea what I'm doing below :-(  //

function colour_change() {
 
 // when n goes to the last colour, will decrease count back down to red //
	
 	if ( n == 3) {
						green.style.backgroundColor = colours[n];
						yellow.style.backgroundColor = colours[n - 1];
						Red.style.backgroundColor = colours[n - 2];
	 } else {
						red.style.backgroundColor = colours[n];
						yellow.style.backgroundColor = colours[n + 1];
						green.style.backgroundColor = colours[n + 2];
	}
		
	
}

colour_change() // call function //

// setInterval (<function>, milliseconds) //
