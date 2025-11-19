 function makeName() {
    let month = document.getElementById("month").value;
    let age = document.getElementById("age").value;
    let season = document.getElementById("season").value;
    
// based on month the first name is
    if (month == "january") {
        month = "Super";
    }   else if (month=="februrary"){
        month = "Red";
    }   else if (month=="march"){
        month = "Wonder";
    }   else if (month=="april"){
        month = "The";
    }   else if (month=="may"){
        month = "Agent";
    }
        else if (month=="june"){
        month = "Green";
    }
        else if (month=="july"){
        month = "Blazing";
    }
        else if (month=="august"){
        month = "Fantastic";
    }
        else if (month=="september"){
        month = "Captain";
    }
        else if (month=="october"){
        month = "Doctor";
    }
        else if (month=="november"){
        month = "Atomic";
    }
        else if (month=="december"){
        month = "Mighty";
    }
    else{
        alert("Invalid month")
    }
// based on age the middle name is
    if (age == "10") {
        age = "Haunting";
    }   else if (age=="11"){
        age = "Hot";
    }   else if (age=="12"){
        age = "Tripping";
    }   else if (age=="13"){
        age = "Harsh";
    }   else if (age=="14"){
        age = "Twisted";
    }   else if (age=="15"){
        age = "Awesome";
    }   else if (age=="16"){
        age = "Magical";
    }   else if (age=="17"){
        age = "Wild";
    }   else if (age=="18"){
        age = "Magestical";
    }   else if (age=="19"){
        age = "Shivering";
    }   else if (age=="20"){
        age = "Amazing";
    }
    else{
        age = "Smacking"
    }
// based on season the last name is
    if(season == "fall"){
        season = "Fire"
    }   else if (season=="summer"){
        season = "Lion"
    }   else if (season=="winter"){
        season = "Ranger"
    }   else if (season=="summer"){
        season = "Lion"
    }   else if (season=="spring"){
        season = "Warrior"
    }
    else{
        alert("Invalid season")

    }





const result= month + " " + age + " " +season;
document.getElementById("result").innerText = result;
}







