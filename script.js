"use strict";

function clock() {
  //Select the clock handles
  const secondsHand = document.querySelector("#seconds");
  const minutesHand = document.querySelector("#minutes");
  const hourHand = document.querySelector("#hours");

  //Get the current time
  const currentDateTime = new Date();
  const seconds = currentDateTime.getSeconds();
  const minutes = currentDateTime.getMinutes() + seconds / 60;
  const hours = (currentDateTime.getHours() % 12) + minutes / 60;

  //Set rotation angles for each time handle
  const secondsAngle = seconds * 6;
  const minutesAngle = minutes * 6;
  const hoursAngle = hours * 30;

  //Implemet the rotation of each handle
  secondsHand.style.transform = `rotate(${secondsAngle}deg)`;
  minutesHand.style.transform = `rotate(${minutesAngle}deg)`;
  hourHand.style.transform = `rotate(${hoursAngle}deg)`;

  //Setting the transformation origin
  secondsHand.style.transformOrigin = "244px 251px";
  minutesHand.style.transformOrigin = "244px 251px";
  hourHand.style.transformOrigin = "244px 251px";

  //Adding the tick sound to the seconds handle
  const tick = new Audio("./media/tick.mp3");
  tick.play();
}

//To ensure the clocl function is called every minute
setInterval(clock, 1000);
