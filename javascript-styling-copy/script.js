let counter = 0;

function mode() {
	document.body.classList.toggle("dark");
	if (counter % 2 == 0) { // dark mode
		const darkSound = new Audio("dark.mp3");
		darkSound.play();
		document.getElementById("mode").innerText = "Light ☀️";
		counter = counter + 1;
	} else { // light mode
		counter = counter + 1
		const lightSound = new Audio("light.mp3");
		lightSound.play();
		document.getElementById("mode").innerText = "Dark 🌙";
	}		
}
