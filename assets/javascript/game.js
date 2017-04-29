var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
				
var wins = 0
var losses = 0
var guessesLeft = 9

var compPick = arr[Math.floor(Math.random()*25)]
	console.log(compPick)
				
document.onkeyup = function(){
	var userPick = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userPick);

if(compPick === userPick){
				
console.log("user wins")
wins = wins + 1 
guessesLeft = 9
compPick = arr[Math.floor(Math.random()*25)]
	console.log(compPick)
	}

else{
	console.log("comp wins")
	//losses = losses + 1
	guessesLeft = guessesLeft - 1
		}

if(guessesLeft === 0 && losses === 2){
	alert("Game Over!")	
	location.reload();	
//	losses = losses + 1	
		}

else if(guessesLeft === 0){
	losses = losses +1
	guessesLeft = 9
}


$("#wins .count").text(wins);
$("#losses .count").text(losses);
$("#guessesLeft .count").text(guessesLeft);

console.log(userPick)
$("#pick .count").append(userPick + " ");
	}
				
