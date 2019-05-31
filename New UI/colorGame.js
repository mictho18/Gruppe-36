var numbOfSquares = 6;
var colors = generateRandomColors(numbOfSquares)
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numbOfSquares = 3;
	colors = generateRandomColors(numbOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent  = pickedColor;
	for (var i = 0; i < squares.length; i++ ){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else { 
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numbOfSquares = 6;
	colors = generateRandomColors(numbOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent  = pickedColor;
	for (var i = 0; i < squares.length; i++ ){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";	
	}
});

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numbOfSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change color display(RGB) to match picked color
	colorDisplay.textContent = pickedColor;
	//Changes play again message to new color message while playing
	this.textContent = "New Colors"
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	};
	h1.style.backgroundColor = "steelblue";
	//changes correct/ try again to empty after reset
	messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//Add quick listeners to squares
		squares[i].addEventListener("click", function(){
		//Grab color of picked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	
	});
}

function changeColors(color){
	//Loop through all squares
	for(var i = 0; i <squares.length; i++){
	//Change each color to match given color
	squares[i].style.backgroundColor = color;

	};
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	//make an arrays
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
		//get random color and push to array
	}
	//return that array
	return arr;

	function randomColor(){
		//pick a "red" from 0 - 255
		var red = Math.floor(Math.random() * 256)
		//pick a "green" from 0 - 255
		var green = Math.floor(Math.random() * 256)
		//pick a "blue" from 0 - 255
		var blue = Math.floor(Math.random() * 256)
		 return "rgb(" + red + ", " + green + ", " + blue + ")";
	}

}

