let attempts = 0 




function login() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	//console.log(username);
	//console.log(password);

	let correct_username = "helen-akl"
	let correct_password = "lioneliscool"

	attempts = attempts + 1;

	if(username == correct_username && password==correct_password){
		result="Correct! Yayyy";
		document.getElementById("result").style.color="Green";
	} else if(attempts >= 3){
		result="You ran out of attempts. Sorry";
		document.getElementById("login").disabled = true;
		document.getElementById("result").style.color="Red";

	} else {
		result="Your password or username is incorrect. Try again";
		document.getElementById("result").style.color="Gold";
	}

document.getElementById("result").innerText = result;
}
