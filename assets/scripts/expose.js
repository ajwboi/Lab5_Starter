// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();
var horn;
var img;
var sound;
var vol;

function init() {
  document.querySelector("#horn-select").addEventListener('change',changeHorn);
  document.getElementById("volume-controls").addEventListener('input', changeVolIcon);
  document.querySelector("button").addEventListener('click', playAudio);
}

function changeHorn() {
  horn = document.querySelector("#horn-select");
  img = document.querySelector("#expose img");
  sound = document.querySelector("audio");

  if (horn.value == "air-horn") {
    sound.src = "/assets/audio/air-horn.mp3";
    img.src = "/assets/images/air-horn.svg";
  }
  else if (horn.value == "party-horn") {
    sound.src = "/assets/audio/party-horn.mp3";
    img.src = "/assets/images/party-horn.svg";
  }
  else if (horn.value == "car-horn") {
    sound.src = "/assets/audio/car-horn.mp3";
    img.src = "/assets/images/car-horn.svg";
  }

  else {
    sound.src = "";
    img.src = "no-image.png";
  }
}

function playAudio() {
  sound = document.querySelector("audio");
  sound.volume = (document.querySelector("#volume-controls input").value / 100);
  sound.play();

  if (document.querySelector("#horn-select").value == "party-horn") 
    jsConfetti.addConfetti();
}

function changeVolIcon() {
  vol = document.querySelector("#volume-controls input").value;
  var image = document.querySelector("#volume-controls img");

  if (vol == 0) 
    image.src = "./assets/icons/volume-level-0.svg";
  else if (vol < 33)
    image.src = "./assets/icons/volume-level-1.svg";
  else if (vol < 67)
    image.src = "./assets/icons/volume-level-2.svg";
  else 
    image.src = "./assets/icons/volume-level-3.svg";
}