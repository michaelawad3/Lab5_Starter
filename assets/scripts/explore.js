// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.querySelector('textarea');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '';

    voices.forEach(function (voice, index) {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += ' — DEFAULT';
      }

      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', function () {
    const text = textArea.value;

    if (text.trim() === '') {
      return;
    }

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoiceIndex = voiceSelect.value;

    if (voices[selectedVoiceIndex]) {
      utterance.voice = voices[selectedVoiceIndex];
    }

    utterance.onstart = function () {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face with open mouth';
    };

    utterance.onend = function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    utterance.onerror = function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    speechSynthesis.speak(utterance);
  });
}