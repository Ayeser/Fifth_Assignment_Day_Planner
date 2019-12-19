let currentTime = moment().hour();

$(document).ready(function () {
    document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY');

    // These if statements simply populate the middle column with event descriptions or filler text
    if(localStorage.getItem("9activity") === null) {
        localStorage.setItem("9activity", "Write event description here");
    }
    document.getElementById("9").innerHTML = localStorage.getItem("9activity");

if(localStorage.getItem("10activity") === null) {
        localStorage.setItem("10activity", "Write event description here");
    }
    document.getElementById("10").innerHTML = localStorage.getItem("10activity");

    if(localStorage.getItem("11activity") === null) {
        localStorage.setItem("11activity", "Write event description here");
    }
    document.getElementById("11").innerHTML = localStorage.getItem("11activity");

    if(localStorage.getItem("12activity") === null) {
        localStorage.setItem("12activity", "Write event description here");
    }
    document.getElementById("12").innerHTML = localStorage.getItem("12activity");

    if(localStorage.getItem("13activity") === null) {
        localStorage.setItem("13activity", "Write event description here");
    }
    document.getElementById("13").innerHTML = localStorage.getItem("13activity");

    if(localStorage.getItem("14activity") === null) {
        localStorage.setItem("14activity", "Write event description here");
    }
    document.getElementById("14").innerHTML = localStorage.getItem("14activity");

    if(localStorage.getItem("15activity") === null) {
        localStorage.setItem("15activity", "Write event description here");
    }
    document.getElementById("15").innerHTML = localStorage.getItem("15activity");

    if(localStorage.getItem("16activity") === null) {
        localStorage.setItem("16activity", "Write event description here");
    }
    document.getElementById("16").innerHTML = localStorage.getItem("16activity");

    if(localStorage.getItem("17activity") === null) {
        localStorage.setItem("17activity", "Write event description here");
    }
    document.getElementById("17").innerHTML = localStorage.getItem("17activity");
    
    // The below function sets the color of the middle blocks based on the current time
    $('.ppf').each(function () {
        if (currentTime > Number(this.id)) {
            console.log("This is past");
            this.setAttribute("class", "past");
        } else if (currentTime < Number(this.id)) {
            console.log("This is future");
            this.setAttribute("class", "future");
        } else {
            this.setAttribute ("class", "present");
        }
    })
})

//this function is called when the save button in the right column is clicked
function saveActivity(time) { 
        localStorage.setItem(time + "activity", document.getElementById(time).textContent);
};