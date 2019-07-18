// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, column;

// Solution Functions...
function level1Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 4) {
		document.getElementById("currentTile").innerHTML = "sand"; //SET OUTPUT TEXT
	} else {
		document.getElementById ("currentTile").innerHTML = "water"; //SET OUTPUT TEXT
		
	}
}
	
function level2Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 2){
		document.getElementById("currentTile").innerHTML = "hills"; //SET OUTPUT TEXT
	} else if (column <= 7) {
		document.getElementById("currentTile").innerHTML = "sand"; //SET OUTPUT TEXT
	} else {
		document.getElementById("currentTile").innerHTML = "water"; //SET OUTPUT TEXT
	}

}

function level3Solution() {
	// USE BINARY IF STATEMENT
	if (column >= 3 && column <=7){
		document.getElementById("currentTile").innerHTML = "sand";	
	} else {
	document.getElementById("currentTile").innerHTML = "hills"; // Set output text
 }
}
function level4Solution() {
	// USE BINARY IF STATEMENT
	if (row >= 2 && row <=3){
		document.getElementById ("currentTile").innerHTML ="hills";
	} else {
		document.getElementById ("currentTile").innerHTML ="sand";
	}
}

function level5Solution() {
	// USE CHAINED IF STATEMENT
	if (row <=2 ) {
		document.getElementById("currentTile").innerHTML = "hills"; // Set output text
	} else if   (row <=5 ) {
		document.getElementById("currentTile").innerHTML = "sand";
	} else {  
		document.getElementById ("currentTile").innerHTML = "water";
	}
}





function level6Solution() {
	// USE BINARY IF STATEMENT
	if (row <=2 == row <=5 ) {
		document.getElementById("currentTile").innerHTML = "water"; // Set output text
	} else {  
		document.getElementById("currentTile").innerHTML = "sand";
	}

}

function level7Solution() {
	// USE BINARY IF STATEMENT
	if ( row == 4 && column == 7 ) {
		document.getElementById("currentTile").innerHTML = "Water"; // Set output text
	} else  {
		document.getElementById ("currentTile").innerHTML = "sand";
	}
}
function level8Solution() {
	// USE BINARY IF STATEMENT
	if ( row ==5 | column ==2 ) {
		document.getElementById("currentTile").innerHTML = "trees"; // Set output text
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}	
}

function level9Solution() {
	// USE BINARY IF STATEMENT
	if ( row <=5 && column <=5) {
		document.getElementById("currentTile").innerHTML = "water"; // Set output text
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}		
}

function level10Solution() {
	// USE CHAINED IF STATEMENT
	if (column <=1) {
		document.getElementById("currentTile").innerHTML = "hills"; // Set output text
	} else if   ( column == 2 || column == 3) {
		document.getElementById("currentTile").innerHTML = "trees";
	} else if  ( column <=7) {	 
		document.getElementById ("currentTile").innerHTML = "sand";
	} else  {
		document.getElementById ("currentTile").innerHTML = "water";
	}
}
function level11Solution() {
	// USE CHAINED IF STATEMENT
	if (column <=5 | row <=3 )
	document.getElementById("currentTile").innerHTML = "water"; // Set output text
}

function level12Solution() {
	// USE BINARY IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level13Solution() {
	// USE BINARY IF STATEMENT

	document.getElementById("currentTile").innerHTML = "----"; // Set output text
}

function level14Solution() {
	// USE CHAINED IF STATEMENT
	let (row >= 1 && row <= 5 && column >= 2 && column<= 5 )
	document.getElementById("currentTile").innerHTML = "tree"; // Set output text

}
