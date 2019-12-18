// First need to load all currently saved localStorage into middle column
// Have button click event ready so saves new entries into localStorage

let flagPast = false;
//above line will flip to change the attr of event block to class "past". also "present" and "future"

let currentTime = moment().format('LT');
let currentTimeHour = parseInt(currentTime.charAt(0));

$(document).ready(function () {
    document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY');
    document.getElementById("9AM").value = "This will have localStorage";
    console.log(typeof(currentTimeHour));
    console.log(currentTimeHour);
})

$(".saveBtn").on('click', function() {
    console.log("This button is working");
    var activity = document.getElementById("9AM").value;
    localStorage.setItem("9AM", activity);
})

function saveActivity(time) { 
    if (time>5 && time<12) {
        localStorage.setItem(time + "activity", document.getElementById(time + 'AM').value);
    }
    console.log(moment().format('LT'));
};