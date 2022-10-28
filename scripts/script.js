let homePts = document.getElementById("home-pts");
let homeCount = 0;
let guestPts = document.getElementById("guest-pts");
let guestCount = 0;
let winner = document.getElementById("winner");

let homeAddPoint = () => {
  homeCount = homeCount + 1;
  homePts.innerText = homeCount;
};

let homeAddTwoPoints = () => {
  homeCount = homeCount + 2;
  homePts.innerText = homeCount;
};

let homeAddThreePoints = () => {
  homeCount = homeCount + 3;
  homePts.innerText = homeCount;
};

let guestAddPoint = () => {
  guestCount = guestCount + 1;
  guestPts.innerText = guestCount;
};

let guestAddTwoPoints = () => {
  guestCount = guestCount + 2;
  guestPts.innerText = guestCount;
};

let guestAddThreePoints = () => {
  guestCount = guestCount + 3;
  guestPts.innerText = guestCount;
};

let showWinner = () => {
  if (homeCount == guestCount) {
    winner.innerText = "No Winner Yet(:.:)!";
  } else if (guestCount > homeCount) {
    winner.innerText =
      "The Winner is: " + document.getElementById("guest").innerText;
  } else {
    winner.innerText =
      "The Winner is: " + document.getElementById("home").innerText;
  }
};

let resetGame = () => {
  homePts.innerText = 0;
  homeCount = 0;
  guestPts.innerText = 0;
  guestCount = 0;
  winner.innerText = "";
};
