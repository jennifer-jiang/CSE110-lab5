// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  function getVoiceList() {
    const voices = speechSynthesis.getVoices();
    const voiceSelect = document.querySelector('select');
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }

  getVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoiceList;
  }

  const playButton = document.querySelector("button");
  playButton.addEventListener('click', function() {
    const voices = speechSynthesis.getVoices();
    const voiceSelect = document.querySelector('select');
    const input = document.getElementById("text-to-speak");
    const textToSpeak = new SpeechSynthesisUtterance(input.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        textToSpeak.voice = voice;
      }
    }
    
    const smileImage = document.getElementById("explore").querySelector("img");
    textToSpeak.addEventListener('start', function () {
      smileImage.src="assets/images/smiling-open.png";
    })
    textToSpeak.addEventListener('end', function () {
      smileImage.src="assets/images/smiling.png";
    })
    window.speechSynthesis.speak(textToSpeak);
  })
}