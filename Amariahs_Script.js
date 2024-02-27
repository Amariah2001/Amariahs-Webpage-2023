"use strict"

/* 
Amariah Robinson
05/07/2023
WEB 110
Professor Neequaye
*/

alert("This Webpage will be used to conduct \ a survey of my website! Thank you!");
runTime();
setInterval("runTime()", 1000);

/* Countdown Function */
function runTime ()
{
    /* Somewhere to store the current date and time */
    var currentDay = new Date(); //uses current date and time from computer
    var dateString = currentDay.toLocaleDateString();
    var timeString = currentDay.toLocaleTimeString();

    /* Using this to display the current date and time */
    document.getElementById("todaysDate").innerHTML = dateString + "<br />" + timeString;

    /* Converting a number and a text 
    newYear = 01/01/2024;
    newString = newYear + "";
    */ 

    /* Creating the countdown clock */
    var newYear = new Date("January 1, 2024");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000*60*60*24); // used to convert from miliseconds to actual whole numbers

    /* Calculating the hours left in the current day */
    var hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24; // to convert it from milliseconds to whole hours!

    /* Calculating the minutes and seconds left in the current hour */
    var minsLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
    var secondsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    /* Displaying the actual countdown clock until the January 1st, 2024 */
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hours").textContent = Math.floor(hoursLeft);
    document.getElementById("minutes").textContent = Math.floor(minsLeft);
    document.getElementById("seconds").textContent = Math.floor(secondsLeft);
}