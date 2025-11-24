let counter = 0;

function mode() {
	if (counter % 2 == 0) { // dark mode
		document.body.style.color = "white";
		document.body.style.backgroundColor = "#2B4570";
		document.getElementById("navbar").style.color = "white";
		document.getElementById("navbar").style.backgroundColor = "#2B4570";
		document.getElementById("welcome").style.backgroundColor = "#7180AC";
		document.getElementById("features").style.backgroundColor = "#7180AC";
		document.getElementById("testimonials").style.backgroundColor = "#2B4570";
		document.getElementById("footer").style.backgroundColor = "#7180AC";

		const links = document.getElementsByClassName("link");
		console.log(links);
		for (const item of links) {
			item.style.color="white";
		}


		const cards = document.getElementsByClassName("card");
		console.log(cards);
		for (const item of cards) {
			item.style.backgroundColor="#2B4570";
		}
		const testimonial = document.getElementsByClassName("testimonial-card");
		console.log(testimonial);
		for (const item of testimonial) {
			item.style.backgroundColor="#7180AC";
		}

		const h4s = document.getElementsByTagName("h4");
		for (const item of h4s) {
			item.style.color = "lightGray";
		}

		document.getElementById("mode").innerText = "Light ☀️";
		counter = counter + 1;
	} else { // light mode
		counter = counter + 1
		document.getElementById("mode").innerText = "Dark 🌙";
		document.body.style.color = "black";
		document.body.style.backgroundColor = "white";
		document.getElementById("navbar").style.color = "black";
		document.getElementById("navbar").style.backgroundColor = "white";
		document.getElementById("welcome").style.backgroundColor = "#e5edff";
		document.getElementById("features").style.backgroundColor = "#f0f0f0";
		document.getElementById("testimonials").style.backgroundColor = "#ffffff";
		document.getElementById("footer").style.backgroundColor = "#ddd";

		const links = document.getElementsByClassName("link");
		console.log(links);
		for (const item of links) {
			item.style.color="#333";
		}


		const cards = document.getElementsByClassName("card");
		console.log(cards);
		for (const item of cards) {
			item.style.backgroundColor="white";
		}
		const testimonial = document.getElementsByClassName("testimonial-card");
		console.log(testimonial);
		for (const item of testimonial) {
			item.style.backgroundColor="#f7f7f7";
		}

		const h4s = document.getElementsByTagName("h4");
		for (const item of h4s) {
			item.style.color = "#555";
		}

	}
}
