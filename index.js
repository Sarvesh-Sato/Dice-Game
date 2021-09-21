



var randomNumber1= Math.floor(Math.random() * 6)+1;
var randomDiceImage= "images/dice" + randomNumber1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

var randomNumber2= Math.floor(Math.random() * 6)+1;
var randomDiceImage1= "images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage1);



if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML="✌️PLAYER 1 WON";
}
else if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").innerHTML="PLAYER 2 WON✌️";
}

else{
    document.querySelector(".container h1").innerHTML="GAME DRAWN";
}