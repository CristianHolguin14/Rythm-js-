function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var correct = 0;


	if (question1 == "Ludwig van Beethoven") {
		correct++;
}
	if (question2 == "La flauta") {
		correct++;
}	
	if (question3 == "El reggae") {
		correct++;
	}
	if (question4 == "Michael Jackson") {
		correct++;
	}
	if (question5 == "La guitarra eléctrica") {
		correct++;
	}	
	if (question6 == "Chris Martin") {
		correct++;
	}	
	if (question7 == "El tempo") {
		correct++;
	}
	if (question8 == "La samba") {
		correct++;
	}	

    	
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/derrota.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct > 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}