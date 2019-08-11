
// Red is #FF4500, Yellow is #656565, Green is #ADFF2F // 

var colours = [ "#FF4500", "#656565", "#ADFF2F" ]; // colour sequencing //

var n = 0;  // state inital variable in colour sequence //

// var Red = document.getElementById("red"); // 
// var Yellow = document.getElementById("yellow"); //
// var Green = document.getElementById("green"); // 
						
					        // PROBLEMS: // 

	      // WHAT I WANT THIS SCRIPT TO DO: Starting at red, want to increment by 1 to get to green. Once it hits green, decrement back down to red //  

	     // Do not understand how to link the id's in my HTML & CSS to the script. Need some feedback of creating a function to do 
	     // this. // 
				      



function colour_change() {
 
 // when n goes to the last colour, will decrease count back down to red //
	
 	if ( n == 3) {
		green.style.backgroundColor = colours[n];
		yellow.style.backgroundColor = colours[n - 1];
		Red.style.backgroundColor = colours[n - 2];
	} 
	
	
	else {
		red.style.backgroundColor = colours[n];
		yellow.style.backgroundColor = colours[n + 1];
		green.style.backgroundColor = colours[n + 2];
	}
		
}

colour_change() // call function //

// setInterval (<function>, milliseconds) //
