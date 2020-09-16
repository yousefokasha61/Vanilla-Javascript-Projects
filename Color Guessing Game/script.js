var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var numOfSquares = 6;

var colors = generateRandomColors(numOfSquares);
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

easy.addEventListener("click", function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;++i){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;++i){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});


resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numOfSquares);
    // pick a new random  color from array
    pickedColor = pickColor();
    // change colordisplayto match picked color
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    this.textContent = "New Colors"

    // change the colors of the squares
    for(var i=0;i<squares.length;++i){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    
});



for(var i=0;i<squares.length;++i){
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for(var i=0;i<squares.length;++i){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * (colors.length) + 1);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // add X random colors to the array
    for(var i=0;i<num;++i){
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor(){
    // pick a red from 0  to 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0  to 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0  to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}