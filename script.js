
var slurps = 0;

function reverthandler(){
document.getElementById("handlerbus").src="images/handler3.png";



}





function getRandomSlurpsIncrease() {
  return 1; 
}

function updateSlurpsDisplay() {
  const slurps = localStorage.getItem("slurps");
  const paragraph = document.getElementById("hundler");

  if (paragraph !== null) {
    paragraph.textContent = `WOW YOU HAVE ${slurps || 0} SLURPS! GET OFF THE COMPUTER`;
    document.getElementById("handlerbus").src="images/handlerbetter.gif";
    setTimeout(reverthandler, 5000);
  }
}





// Function to update and save the 'slurps' variable
function updateSlurps() {
  let slurps = localStorage.getItem("slurps");

  if (slurps === null || isNaN(slurps)) {
    slurps = 0;
  } else {
    slurps = parseInt(slurps);
  }

  const increaseAmount = getRandomSlurpsIncrease();
  slurps += increaseAmount;

  // Play a sound when slurps increase
  slurpsound()


  localStorage.setItem("slurps", slurps);

  console.log(`Slurps increased by ${increaseAmount}. Total slurps: ${slurps}`);
  

  // Update the display
  updateSlurpsDisplay();
  

  
  // Call the function again after a delay to simulate continuous growth
  setTimeout(updateSlurps,  Math.floor(Math.random() * 30000)); // Update slurps every second (adjust as needed)
}

function ripOgSlurpSound(){
  var audio = new Audio('images/slosh.wav');
  audio.play();
  
  
  }

  function slurpsound() {
    // Array of sound file names
    var soundFiles = ['images/slurp1.mp3', 'images/slurp2.mp3', 'images/slurp3.mp3'];

    // Generate a random index to select a sound from the array
    var randomIndex = Math.floor(Math.random() * soundFiles.length);

    // Create an audio element
    var audio = new Audio();

    // Set the source of the audio to the randomly selected sound file
    audio.src = soundFiles[randomIndex];

    // Play the audio
    audio.play();
}


  function retry(){   
    setTimeout(() => {

      klug();

    }, "5290")

  }
  
function deathsounds(){
  var audio = new Audio('images/death.mp3');
  audio.play();
  
  
  }

  function enjoy() {
   document.getElementById("handlerbus").src="images/handler.gif";
        document.getElementById('hundler').innerHTML = 'wow you have ' + slurps + ' slurps! Get off the computer ';
    
    setTimeout(reverthandler, 5000);
    
    
    }
    

// Start the slurps update loop
updateSlurps();

// To see the current number of slurps:
const currentSlurps = localStorage.getItem("slurps");
console.log(`Current slurps: ${currentSlurps}`);

function klug(){
  localStorage.setItem("slurps", 0);
  updateSlurpsDisplay(); // Update the display after resetting


}

element.addEventListener('contextmenu', (event) => {
slurpsound();
})

function savemenu(){
  document.getElementById("savemenu").style.zIndex="300";


}

function savemenuhide(){
  document.getElementById("savemenu").style.zIndex="-100";


}

function clicksound(){
  var audio = new Audio('images/click.mp3');
  audio.play();
  
  
  }

  function savethumb(){
    document.getElementById("save").src="images/thumb uppy.png";

  }

  function startCountdown() {
    var countdownElement = document.getElementById("countdown");
    var count = 5.3;

    function updateCountdown() {
      count = (count - 0.01).toFixed(2); // Decrease by 0.01 and round to 2 decimal places
      countdownElement.textContent = count;

        if (count < 0) {
            countdownElement.textContent = "0";
            clearInterval(interval);
            window.close() ;
        }
    }

    // Update the countdown every second (1000 milliseconds)
            // Update the countdown every 10 milliseconds (0.01 second)
            var interval = setInterval(updateCountdown, 10);

        }
// Start the countdown when the page loads
function back(){
  document.getElementById("countdown").style.zIndex="1000";

}

function divine() {

  setTimeout(() => {
    window.open('images/quitter.png','popUpWindow','height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');

  }, "5200")


}





