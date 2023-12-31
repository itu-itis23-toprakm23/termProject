function facedown() {
	letterM = document.querySelector(".letters #m");
	letterU = document.querySelector(".letters #u");
	letterR = document.querySelector(".letters #r");
	letterA = document.querySelector(".letters #a");
	letterT = document.querySelector(".letters #t");

	// Creating a randomized array
	const array = [0,1,2,3,4];
	const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

	// Matching new sources of the images
	arr = [letterM, letterU, letterR, letterA, letterT];
	srcs = ["img/m.svg", "img/u.svg", "img/r.svg", "img/a.svg", "img/t.svg"]
	for (let i=0; i<5; i++) {
		arr[i].src = srcs[shuffledArray[i]];
	}

	// Delaying for two seconds and facing down
	setTimeout(function() {	
		arr = [letterM, letterU, letterR, letterA, letterT];
		for (let i=0; i<5; i++) {
			arr[i].src = "img/letterBG.svg";
		}
	}, 2000);
}

function addRestart() {
	console.log("I am too lazy");
}