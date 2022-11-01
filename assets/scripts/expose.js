// expose.js

window.addEventListener('DOMContentLoaded', init);
var sound;

function init() {
  document.querySelector("#horn-select").addEventListener('choice', changeHorn);
  document.querySelector("button").addEventListener('click', playAudio);
  document.getElementById("volume-controls").addEventListener('input', changeVolIcon);
}

function changeHorn() {
  var horn = document.querySelector("#horn-select");
  var image = document.querySelector("expose img");

  if (horn.value == "air-horn") {
    sound.src = "./assets/audio/air-horn.mp3";
    image.src = "./assets/images/air-horn.mp3";
  }
  else if (horn.value == "party-horn") {
    sound.src = "./assets/audio/party-horn.mp3";
    image.src = "./assets/images/party-horn.mp3";
  }
  else if (horn.value == "car-horn") {
    sound.src = "./assets/audio/car-horn.mp3";
    image.src = "./assets/images/car-horn.mp3";
  }

  else {
    sound.src = "";
    image.src = "no-image.png";
  }
}

function playAudio() {
  sound.play();
}

function changeVolIcon() {
  var vol = document.querySelector("volume-controls input").value;
  var image = document.querySelector("volume controls img");

  if (vol == 0) 
    image.src = "./assets/icons/volume-level-0.svg";
  else if (vol < 33)
    image.src = "./assets/icons/volume-level-1.svg";
  else if (vol < 67)
    image.src = "./assets/icons/volume-level-2.svg";
  else 
    image.src = "./assets/icons/volume-level-3.svg";
}