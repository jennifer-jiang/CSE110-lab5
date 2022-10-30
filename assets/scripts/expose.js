// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelector = document.getElementById("horn-select");
  const volumeControl = document.getElementById("volume-controls");
  const soundButton = document.querySelector("button");

  hornSelector.addEventListener('change', function() {
    const hornImage = document.getElementById("expose").querySelector("img");
    const hornAudio = document.querySelector("audio");
    const horn = hornSelector.options[hornSelector.selectedIndex].text;

    if (horn == "Air Horn") {
      hornImage.src="assets/images/air-horn.svg";
      hornAudio.src="assets/audio/air-horn.mp3";
    }
    if (horn == "Car Horn") {
      hornImage.src="assets/images/car-horn.svg";
      hornAudio.src="assets/audio/car-horn.mp3";
    }
    if (horn == "Party Horn") {
      hornImage.src="assets/images/party-horn.svg";
      hornAudio.src="assets/audio/party-horn.mp3";
    }
  });

  volumeControl.addEventListener('input', function() {
    const volume = document.querySelector("input").value;
    const volumeImage = document.querySelector("div > img");
    const hornAudio = document.querySelector("audio");

    hornAudio.volume = volume/100;

    if (volume == 0) {
      volumeImage.src="assets/icons/volume-level-0.svg";
    }
    if (volume > 0 && volume < 33) {
      volumeImage.src="assets/icons/volume-level-1.svg";
    }
    if (volume > 32 && volume < 67) {
      volumeImage.src="assets/icons/volume-level-2.svg";
    }
    if (volume > 66) {
      volumeImage.src="assets/icons/volume-level-3.svg";
    }
  });

  soundButton.addEventListener('click', function() {
    const hornAudio = document.querySelector("audio");
    hornAudio.play();

    const horn = hornSelector.options[hornSelector.selectedIndex].text;
    if (horn == "Party Horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  })
}