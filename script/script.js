// First need to load all currently saved localStorage into middle column
// Have button click event ready so saves new entries into localStorage

let flagPast = false;
//above line will flip to change the attr of event block to class "past". also "present" and "future"

$(document).ready(function () {
    document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY');
// put function here for drawing the localStorage into middle column

})

$(".saveBtn").on('click', function() {
    //when hit save button, push to localStorage\
    // write in a way that it will identify the button id.
    console.log("This button is working");
    var activity = document.getElementById("9AM").value;
    localStorage.setItem("9AM", activity);
})

function saveActivity(time) { 
    console.log(time);
};