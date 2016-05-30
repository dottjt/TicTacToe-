// Unit tests 
/* */
// Adding functions who's turn . 
// leaderboard
// reset board when done. 

  
// cominbation logic for the 8 possible winning combinations, which changes to 
// 1 is player one clicks and 2 is player two clicks

var combination = { 
	h1: [0,0,0],
	h2: [0,0,0],
	h3: [0,0,0],
	v1: [0,0,0],
 	v2: [0,0,0],
 	v3: [0,0,0],
 	d1: [0,0,0],
 	d2: [0,0,0]
};


var turnCounter = 0; 
var combinationLogic = [1,2,1,2,1,2,1,2,1];


// determines winner 
function determineWinner() {
	for (var i in combination) {
		var tmp = combination[i].toString();
		console.log(combination[i]);
		if (tmp === "1,1,1" || tmp === "1,1,1,1") {
			alert("Player One wins! Yeeaaaaaaaahhhhhhhh");
			resetBoard();
			leaderBoard("p1");
			return
		} else if (tmp === "2,2,2" || tmp === "2,2,2,2") {
			alert("Player Two wins! Noooooooooooooooooo");
			resetBoard();
			leaderBoard("p2");
			return
			}
	}
	if (turnCounter === 9) {
			alert("No one wins");
			resetBoard();	
			return
		}
};
	
// leaderboard variables
var p1s = document.getElementById("playeronescore");
var p2s = document.getElementById("playertwoscore");
var pt = document.getElementById("playerturn");
var p1 = 0;
var p2 = 0;



function leaderBoard(x) {
	if (x === "p1") {
		p1 += 1;
		p1s.innerHTML = p1;
		console.log(p1);
	} else { 
		p2 += 1;
		p2s.innerHTML = p2;
		console.log(p2);
	}

}

function resetBoard() {
	// reset game logic
	for (var i in combination) {
		combination[i] = [0,0,0];
	}
	// reset tile counters 
	for (var i = 0; i < tileArray.length; i++) {
		tileArray[i].innerHTML = "";
	};

	this.turnCounter = 0;
}


// tile selectors
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');

// for resetBoard
var tileArray = [t1, t2, t3, t4, t5, t6, t7, t8, t9]

// main gameplay function. Run this to set event logic and play game! 
function gamePlay() { 

	t1.addEventListener('click', t1E, false);
	t2.addEventListener('click', t2E, false);
	t3.addEventListener('click', t3E, false);
	t4.addEventListener('click', t4E, false);
	t5.addEventListener('click', t5E, false);
	t6.addEventListener('click', t6E, false);
	t7.addEventListener('click', t7E, false);
	t8.addEventListener('click', t8E, false);
	t9.addEventListener('click', t9E, false);

};

// determines which player goes next, alternating between "X" and "O", 1 and 2;
// used an array because you don't mess with messy closure logic, by maintaining state.
function findp() { 
	if (turnCounter % 2 === 0) {
			return p = "X";
		} else {
			return p = "O";
		}
}

function playerTurn(s) {
	if (s === 1) {
		pt.innerHTML = "Player One";
	} else {
		pt.innerHTML ="Player Two";
	}
}

function t1E() {
		findp();
		var s = combinationLogic[turnCounter];
		console.log(p);
		console.log(s);
		console.log(turnCounter);
		t1.innerHTML = p;
		combination.h1[0] = s;
		combination.v1[0] = s;
		combination.d1[0] = s;
		turnCounter += 1;
		determineWinner();
		playerTurn(s);
}

function t2E() {
		findp();
		var s = combinationLogic[turnCounter];
		console.log(p);
		console.log(s);
		console.log(turnCounter);
		t2.innerHTML = p;
		combination.h1[1] = s;
		combination.v2[0] = s;
		turnCounter += 1;
		determineWinner();
		playerTurn(s);
	};


function t3E() {
		findp();
		var s = combinationLogic[turnCounter];
		console.log(p);
		console.log(s);
		console.log(turnCounter);
		t3.innerHTML = p;
		combination.h1[2] = s;
		combination.v3[0] = s;
		combination.d2[2] = s;
		turnCounter += 1;
		determineWinner();
		playerTurn(s);

	};

function t4E() {
		findp();
		var s = combinationLogic[turnCounter];
		console.log(p);
		console.log(s);
		console.log(turnCounter);
		t4.innerHTML = p;
		combination.h2[0] = s;
		combination.v1[1] = s;
		turnCounter += 1;
		determineWinner();
		playerTurn(s);
	};

function t5E() {
		findp();
		var s = combinationLogic[turnCounter];
		console.log(p);
		console.log(s);
		console.log(turnCounter);
		t5.innerHTML = p;
		combination.h2[1] = s;
		combination.v2[1] = s;
		combination.d1[1] = s;
		combination.d2[1] = s;
		turnCounter += 1;
		determineWinner();
		playerTurn(s);

	};

function t6E() {
		findp();
		var s = combinationLogic[turnCounter];
		console.log(p);
		console.log(s);
		console.log(turnCounter);
		t6.innerHTML = p;
		combination.h2[2] = s;
		combination.v3[1] = s;
		turnCounter += 1;
		determineWinner();
		playerTurn(s);
	};

function t7E() {
		findp();
		var s = combinationLogic[turnCounter];
		console.log(p);
		console.log(s);
		console.log(turnCounter);
		t7.innerHTML = p;
		combination.h3[0] = s;
		combination.v1[2] = s;
		combination.d2[0] = s;
		turnCounter += 1;
		determineWinner();
		playerTurn(s);
	};

function t8E() {
		findp();
		var s = combinationLogic[turnCounter];
		console.log(p);
		console.log(s);
		console.log(turnCounter);
		t8.innerHTML = p;
		combination.h3[1] = s;
		combination.v2[2] = s;
		turnCounter += 1;
		determineWinner();
		playerTurn(s);
	};

function t9E() {
		findp();
		var s = combinationLogic[turnCounter];
		console.log(p);
		console.log(s);
		console.log(turnCounter);
		t9.innerHTML = p;
		combination.h3[2] = s;
		combination.v3[2] = s;
		combination.d1[2] = s;
		turnCounter += 1;
		determineWinner();
		playerTurn(s);
	};


gamePlay();
