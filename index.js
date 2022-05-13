var SpeechRecognition =  webkitSpeechRecognition//||  window.SpeechRecognition
var SpeechGrammarList =  webkitSpeechGrammarList //||  window.SpeechGrammarList
var SpeechRecognitionEvent =  webkitSpeechRecognitionEvent //||  window.SpeechRecognitionEvent

var recognition = new SpeechRecognition();
const icon = document.querySelector('i.fa.fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);
const sound = document.querySelector('.sound');
var clicks = 0;

icon.addEventListener('click', () => {
    //sound.play();
    //dictate();
    if (clicks % 2 == 0){
        recognition.start();
    } else {
        recognition.stop();
    }
  });
//   const dictate = () => {
//     recognition.start();
    
//   }

recognition.onresult = function(event) {
    const speechToText = event.results[0][0].transcript;
    paragraph.textContent = speechToText;
}
  