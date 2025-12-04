function party() {
	const people = document.getElementById("people").value;
	let sodas = (people * 2);
	let snacks = (people * 3);
	let balloons = (people * 4);
	let chairs = 3 + Number(people);
	let partyhat = 3 + Number(people);



	const result= "You will need: ";
	sodas = sodas + " sodas";
	snacks = snacks + " snacks";
	balloons = balloons + " balloons";
	chairs = chairs + " chairs";
	partyhat = partyhat + " party hats";
	document.getElementById("result").innerText = result;
	document.getElementById("sodas").innerText = sodas;
	document.getElementById("snacks").innerText = snacks;
	document.getElementById("balloons").innerText = balloons;
	document.getElementById("chairs").innerText = chairs;
	document.getElementById("partyhat").innerText = partyhat;
	const sound = new Audio("surprise.mp3");
			sound.play();
			document.body.style.backgroundColor = "Chartreuse";





}