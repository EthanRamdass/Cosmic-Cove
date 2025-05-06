/*** You will not need this file until Unit 5 ***/

let likeButton = document.getElementById("like-button");
totalLikes = 0;
const addLike = () =>{
  totalLikes++;
  let likeCount = document.getElementById("likeCount");
  likeCount.textContent = totalLikes;
}
likeButton.addEventListener('click', addLike);    

let dislikeButton = document.getElementById("dislike-button");
totalDislikes = 0;
const addDislike = () =>{
  totalDislikes++;
  let dislikeCount = document.getElementById("dislikeCount");
  dislikeCount.textContent = totalDislikes;
}
dislikeButton.addEventListener('click', addDislike); 

/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button

// Step 2: Write the callback function
const toggleDarkMode = () => {
  // Write your code here
 
  // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function






// Theme toggle
document.getElementById("dark").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

let count = 3;
let rotateFactor = 0;
const modalImage = document.getElementById("modal-img");

const animateImage = () => {
  rotateFactor = rotateFactor === 0 ? -10 : 0;
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

const toggleModal = (person) => {
  let modal = document.getElementById("success-modal");
  let modalText = document.getElementById("modal-text");

  modal.style.display = "flex";
  modalText.textContent = `🎉 Thanks for RSVPing, ${person.fullName}! See you soon!`;

  let intervalId = setInterval(animateImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 5000);
};

const validateForm = (event) => {
  event.preventDefault();

  let fullName = document.getElementById("full-name");
  let planet = document.getElementById("planet");
  let email = document.getElementById("email");

  let inputs = [fullName, planet, email];
  let isValid = true;

  // Reset all fields
  inputs.forEach(input => input.classList.remove("error"));

  if (fullName.value.length < 2) {
    fullName.classList.add("error");
    isValid = false;
  }
  if (planet.value.length < 2) {
    planet.classList.add("error");
    isValid = false;
  }
  if (!email.value.includes("@")) {
    email.classList.add("error");
    isValid = false;
  }

  if (isValid) {
    const person = {
      fullName: fullName.value,
      planet: planet.value,
      email: email.value
    };

    addParticipant(person);
    toggleModal(person);
    fullName.value = "";
    planet.value = "";
    email.value = "";
  }
};

const addParticipant = (person) => {
  const participantDiv = document.getElementById("rsvp-participants");

  const newP = document.createElement("p");
  newP.textContent = `🎟️ ${person.fullName} from ${person.planet} has RSVP'd.`;
  participantDiv.insertBefore(newP, document.getElementById("rsvp-count"));

  count++;
  const counter = document.getElementById("rsvp-count");
  counter.textContent = `⭐ ${count} people have RSVP'd to this event!`;
};

document.getElementById("rsvp-button").addEventListener("click", validateForm);
