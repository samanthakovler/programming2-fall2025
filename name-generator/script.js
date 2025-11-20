 function makeName() {
    let month = document.getElementById("month").value.toLowerCase();
    let age = document.getElementById("age").value;
    let season = document.getElementById("season").value.toLowerCase();
    


// based on month the first name is
    if (month == "january") {
        month = "Super";
        document.getElementById("result").style.backgroundColor="Cyan";

    }   else if (month=="february"){
        month = "Red";
        document.getElementById("result").style.backgroundColor="Cyan";

    }   else if (month=="march"){
        month = "Wonder";
        document.getElementById("result").style.backgroundColor="LightGreen";

    }   else if (month=="april"){
        month = "The";
        document.getElementById("result").style.backgroundColor="LightGreen";

    }   else if (month=="may"){
        month = "Agent";
        document.getElementById("result").style.backgroundColor="LightGreen";
    }
        else if (month=="june"){
        month = "Green";
        document.getElementById("result").style.backgroundColor="Aquamarine";
    }
        else if (month=="july"){
        month = "Blazing";
        document.getElementById("result").style.backgroundColor="Aquamarine";
    }
        else if (month=="august"){
        month = "Fantastic";
        document.getElementById("result").style.backgroundColor="Aquamarine";
    }
        else if (month=="september"){
        month = "Captain";
        document.getElementById("result").style.backgroundColor="Gold";
    }
        else if (month=="october"){
        month = "Doctor";
        document.getElementById("result").style.backgroundColor="Gold";
    }
        else if (month=="november"){
        month = "Atomic";
        document.getElementById("result").style.backgroundColor="Gold";
    }
        else if (month=="december"){
        month = "Mighty";
        document.getElementById("result").style.backgroundColor="Cyan";
    
    }
// based on age the middle name is
    if (age == "10") {
        age = "Haunting";
        document.getElementById("result").style.fontSize="20px";
    }   else if (age=="11"){
        age = "Hot";
        document.getElementById("result").style.fontSize="24px";
    }   else if (age=="12"){
        age = "Tripping";
        document.getElementById("result").style.fontSize="28px";
    }   else if (age=="13"){
        age = "Harsh";
        document.getElementById("result").style.fontSize="32px";
    }   else if (age=="14"){
        age = "Twisted";
        document.getElementById("result").style.fontSize="36px";
    }   else if (age=="15"){
        age = "Awesome";
        document.getElementById("result").style.fontSize="40px";
    }   else if (age=="16"){
        age = "Magical";
        document.getElementById("result").style.fontSize="44px";
    }   else if (age=="17"){
        age = "Wild";
        document.getElementById("result").style.fontSize="48px";
    }   else if (age=="18"){
        age = "Mythical";
        document.getElementById("result").style.fontSize="52px";
    }   else if (age=="19"){
        age = "Shivering";
        document.getElementById("result").style.fontSize="56px";
    }   else if (age=="20+"){
        age = "Amazing";
        document.getElementById("result").style.fontSize="80px";
    }
// based on season the last name is
    if(season == "fall"){
        season = "Fire"
        document.getElementById("result").style.color="DarkOrange";
    }   else if (season=="summer"){
        season = "Lion"
        document.getElementById("result").style.color="HotPink";
    }   else if (season=="winter"){
        season = "Ranger"
        document.getElementById("result").style.color="CornflowerBlue";
    }   else if (season=="spring"){
        season = "Warrior"
        document.getElementById("result").style.color="DarkGreen";
    }




// display the name
const result= month + " " + age + " " +season;
document.getElementById("result").innerText = result;
}







