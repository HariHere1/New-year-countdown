// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = days + " days ";
  document.getElementById("hours").innerHTML = hours + "  hours ";
  document.getElementById("minutes").innerHTML = minutes + "  min ";
  document.getElementById("seconds").innerHTML = seconds + "  sec ";

  // Display a message when the countdown is over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "";
    document.getElementById("message").innerHTML = "Happy New Year! Welcome to 2024!";
  }
}, 1000);
