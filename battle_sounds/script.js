// Battle Game Project 4/25/2023

/* Simple text-based choose your own adventure game using html, css and javascript.
Focusing on user input, logic, function and events.
*/

//add an event listener to the button element
document.getElementById("button").addEventListener("click", startBattle);

// definition of the startBattle() function which controlls the game itself
function startBattle(){
	// clear and old messages in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent = "";

	// initial prompt for the user input that gets stored in a variable 
    var action = window.prompt("You're walking through the forest minding your own business a troll suddenly appear!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you try to BRIBE the troll?").toUpperCase();
   
   // switch statement to handle the play's initial choice
    switch(action){
      case "FIGHT":{
      	fightBattle();
      	} break;
      case "RUN":{
      	runBattle();
      	} break;
      case "BRIBE":{
      	bribeBattle();
      	} break;

      default: {
      	//the user has not entered a valid choice at the original prompt
      	window.alert("You entered:" + action + ". That is not a valid choice! Please try again");
         startBattle();

      }//end of default case

    }// end of switch statement

}// end of the startBattle() function	

//definition of the fightBattle() function
function fightBattle(){
 var skill = window.prompt("Are yolu a skill fighter? (YES or NO)").toUpperCase();
 var strong = window.prompt("Are you stronger than a troll? (YES or NO)").toUpperCase();

 // if statement tht analyzes the responses
 if(skill === "YES" || strong === "YES") {
 document.getElementById("victory").innerHTML = "You can either be strong or more skilled than a troll tosurvive another day!";
 document.getElementById("win").play();
 document.getElementById("button").textContent = "Play Again";

 } else {
 //the user did not response YES to either prompt
 	document.getElementById("defeat").innerHTML = "You are not skilled or strong? why did you fight a troll?<br/>You have been defeated!";
 	document.getElementById("lose").play();
 	document.getElementById("button").textContent = "Play Again";

 }

}// end of fightBattle() function

// Definition of the runBattle() fuction
function runBattle(){
var fast = window.prompt("Are you fast? (YES or NO )").toUpperCase();

if (fast === "YES") {
document.getElementById("victory").innerHTML = "Your speed has saved you.<br/>but you can live with your cowardice?";
document.getElementById("win").play();
document.getElementById("button").textContent = "Play Again";
} else{

document.getElementById("defeat").innerHTML = "If you are going to run at least be faster than a troll!<br/> you have lost";
document.getElementById("lose").play();
document.getElementById("button").textContent = "Play Again";
}
}// end of the runBattle() function

// Definition of the bribeBattle() function
function bribeBattle(){
var money = window.prompt("You have to pay the troll-toll.\nDo you have any money?(YES or NO)").toUpperCase();
 if (money === "YES") {
 	// now ask if they have the correct amount
 	var amount = window.prompt("How much money do you have?\nPlese enter a numeric value.");
   //try to convert the input to an integer value
 	amount = parseInt(amount);
 	// chech the amount against our condition
 	if (amount > 50) {
 		document.getElementById("victory").innerHTML = "Great job, the trollis happy!<br/> You may pass ";
        document.getElementById("win").play();
        document.getElementById("button").textContent = "Play Again";

 	} else {
 		

        document.getElementById("defeat").innerHTML = "The troll need more than that!<br/>Your fate is sealed";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Play Again";

 	}

 } else {
document.getElementById("defeat").innerHTML = "No money! troll don't have venom...yet<br/>";
document.getElementById("lose").play();
document.getElementById("button").textContent = "Play Again";
 }
}// end of bribeBattle() function

