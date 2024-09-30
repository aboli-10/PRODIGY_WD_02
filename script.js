// Initializing variables for time
let seconds = 00;
let tens = 00;
let mins = 00;

// Grabbing elements for updating the display
let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let getMins = document.querySelector(".mins");

// Grabbing button elements for interaction
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");

// Variable to store the timer interval
let interval;

// Start button functionality
btnStart.addEventListener("click", () => {
  // Clear any running interval to avoid multiple instances
  clearInterval(interval);
  // Start the timer by calling the startTimer function every 10 milliseconds
  interval = setInterval(startTimer, 10);
});

// Stop button functionality
btnStop.addEventListener("click", () => {
  // Clear the interval to stop the timer
  clearInterval(interval);
});

// Reset button functionality
btnReset.addEventListener("click", () => {
  // Clear the interval to stop the timer
  clearInterval(interval);
  // Reset all time values to zero
  tens = "00";
  seconds = "00";
  mins = "00";
  // Update the display with the reset values
  getSeconds.innerHTML = seconds;
  getTens.innerHTML = tens;
  getMins.innerHTML = mins;
});

// Function to handle the timer logic
function startTimer() {
  tens++;

  // Update tens place (milliseconds)
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens; // Add a leading zero for single digits
  }
  if (tens > 9) {
    getTens.innerHTML = tens; // Display tens normally if greater than 9
  }

  // When tens reach 100, increment seconds and reset tens
  if (tens > 99) {
    seconds++;
    getSeconds.innerHTML = "0" + seconds; // Add leading zero for seconds
    tens = 0;
    getTens.innerHTML = "0" + 0; // Reset tens to zero
  }

  // Remove leading zero for seconds once they are above 9
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }

  // When seconds reach 60, increment minutes and reset seconds
  if (seconds > 59) {
    mins++;
    getMins.innerHTML = "0" + mins; // Add leading zero for minutes
    seconds = 0;
    getSeconds.innerHTML = "0" + 0; // Reset seconds to zero
  }

  // Remove leading zero for minutes once they are above 9
  if (mins > 9) {
    getMins.innerHTML = mins;
  }
}
