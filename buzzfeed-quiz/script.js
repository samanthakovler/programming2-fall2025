let mike = 0;
let sully = 0;
let roz = 0;
let randall = 0;
let boo = 0;


function getResults() {

// description
	let chaotic = document.getElementById('chaotic');
	if(chaotic.checked) { // if filled in
		console.log("The user chose chaotic");
		mike = Number(mike) + 1
	}

	let loyal = document.getElementById('loyal');
	if(loyal.checked) {
		console.log("The user chose loyal");
		sully = Number(sully) + 1
	}

	let sarcastic = document.getElementById('sarcastic');
	if(sarcastic.checked) {
		console.log("The user chose sarcastic");
		roz = Number(roz) + 1
	}

	let clever = document.getElementById('clever');
	if(clever.checked) {
		console.log("The user chose clever");
		randall = Number(randall) + 1
	}

	let funny = document.getElementById('funny');
	if(funny.checked) {
		console.log("The user chose funny");
		boo = Number(boo) + 1
	}

//fears

	let dissapoint = document.getElementById('dissapoint');
	if(dissapoint.checked) { // if filled in
		console.log("The user chose dissapoint");
		sully = Number(sully) + 1
	}

	let bugs = document.getElementById('bugs');
	if(bugs.checked) {
		console.log("The user chose bugs");
		boo = Number(boo) + 1
	}

	let failure = document.getElementById('failure');
	if(failure.checked) {
		console.log("The user chose failure");
		mike = Number(mike) + 1
	}
		let noises = document.getElementById('noises');
	if(noises.checked) {
		console.log("The user chose noises");
		roz = Number(roz) + 1
	}

	let nothing = document.getElementById('nothing');
	if(nothing.checked) {
		console.log("The user chose nothing");
		randall = Number(randall) + 1
	}

//job

	let police = document.getElementById('police');
	if(police.checked) { // if filled in
		console.log("The user chose police");
		sully = Number(sully) + 1
	}

	let comedian = document.getElementById('comedian');
	if(comedian.checked) {
		console.log("The user chose comedian");
		mike = Number(mike) + 1
	}

	let ceo = document.getElementById('ceo');
	if(ceo.checked) {
		console.log("The user chose ceo");
		randall = Number(randall) + 1
	}
		let scientist = document.getElementById('scientist');
	if(scientist.checked) {
		console.log("The user chose scientist");
		roz = Number(roz) + 1
	}

	let teacher = document.getElementById('teacher');
	if(teacher.checked) {
		console.log("The user chose teacher");
		teacher = Number(teacher) + 1
	}

//vacation

	let jungle = document.getElementById('jungle');
	if(jungle.checked) { // if filled in
		console.log("The user chose jungle");
		randall = Number(randall) + 1
	}

	let museum = document.getElementById('museum');
	if(museum.checked) {
		console.log("The user chose museum");
		roz = Number(roz) + 1
	}

	let mountain = document.getElementById('mountain');
	if(mountain.checked) {
		console.log("The user chose mountain");
		sully = Number(sully) + 1
	}
		let beach = document.getElementById('beach');
	if(beach.checked) {
		console.log("The user chose beach");
		boo = Number(boo) + 1
	}

	let amusement = document.getElementById('amusement');
	if(amusement.checked) {
		console.log("The user chose amusement");
		mike = Number(mike) + 1
	}
	
	//calculating results
	let result = " "
	let img = " "
	let paragraph = " "
	console.log(sully)
	console.log(mike)
	console.log(roz)
	console.log(boo)
	console.log(randall)

	if (sully > mike && sully > roz && sully > boo && sully > randall) {
		result = "You are Sully!"
			
	}

	else if (mike > sully && mike > roz && mike > boo && mike > randall) {
		result = "You are Mike!"
			
	}

	else if (roz > sully && roz > mike && roz > boo && roz > randall) {
		result = "You are Roz!"

	}

	else if (boo > sully && boo > mike && boo > roz && boo > randall) {
		result = "You are Boo!"
		
	}

	else if (randall > sully && randall > mike && randall >roz && randall >boo) {
		result = "You are Randall!"

	}
	else{
		const people = ["You are Mike!", "You are Sully!", "You are Boo!", "You are Roz!", "You are Randall!"];

		const random = Math.floor(Math.random() * people.length);

		result = people[random]

	}

console.log(result);
	if (result == "You are Mike!") {
		document.getElementById("img").src="mike.png";
		paragraph = "You’re energetic, hilarious, and always looking for a good time. You hype up your friends, chase big dreams, and steal the spotlight — even when things get chaotic."
			const sound = new Audio("mike.mp3");
			sound.play();	
	}

	else if (result == "You are Sully!") {
		document.getElementById("img").src="sully.png";
		paragraph = "You’re loyal, protective, and have a huge heart. People feel safe around you, and even when you’re nervous, you always step up for the ones you love. Gentle giant energy."
			const sound = new Audio("sully.mp3");
			sound.play();
	}

	else if (result == "You are Boo!") {
		document.getElementById("img").src="boo.png";
		paragraph = "You’re adorable, playful, and full of chaotic curiosity. You bring out the soft side in everyone and turn every moment into an adventure."
			const sound = new Audio("boo.mp3");
			sound.play();
	}


	else if (result == "You are Roz!") {
		document.getElementById("img").src="roz.png";
		paragraph = "You’re observant, organized, and always one step ahead. You see everything and don’t let anyone get away with nonsense. Very “I’m watching you” energy"
			const sound = new Audio("roz.mp3");
			sound.play();
	}

	else if (result == "You are Randall!") {
		document.getElementById("img").src="randall.png";
		paragraph = "You’re clever, competitive, and always planning your next move. People may underestimate you, but you’re ready to prove them wrong — with style"
			const sound = new Audio("randall.mp3");
			sound.play();
	}




	

	document.getElementById("door").src=" ";
	document.getElementById("result").innerText = result;
	// document.getElementById("img").innerText = img;
	document.getElementById("paragraph").innerText = paragraph;
}
