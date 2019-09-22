

var colours = [ "red", "yellow", "green" ]; // colour sequencing //

var n = 0;  // state inital variable in colour sequence //


//this ensures the content loads fully
window.addEventListener('load', start);

function start()
{
    var changeColours = setInterval(colour_change, 2000)
}

function colour_change() 
{
    // the light will change in the order: red, green, yellow 
    if (n == 0) { 
		 n = 2;
		}
    else { 
		 n = n - 1;
		}
    
    // create a reference to the divs
    var red = document.getElementById("red");
    var green = document.getElementById("green");
    var yellow = document.getElementById("yellow");

    // when n goes to the last colour, will decrease count back down to red 
    
    // red = 0, green = 2, yellow = 1 | #33333 = black 
    switch (n)
    {
        case 0:
            red.style.backgroundColor = colours[0];
            yellow.style.backgroundColor = "#333333";
            green.style.backgroundColor = "#333333";
            break;
        case 1:
            red.style.backgroundColor = "#333333";
            yellow.style.backgroundColor = colours[1];
            green.style.backgroundColor = "#333333";
            break;
        case 2:
            red.style.backgroundColor = "#333333";
            yellow.style.backgroundColor = "#333333";
            green.style.backgroundColor = colours[2];
            break;
    }

    // to help debug //
    console.log(n);
}
