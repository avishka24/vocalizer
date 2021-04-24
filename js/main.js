const speakButton = document.querySelector('.speakBtn');
const userMessage = document.querySelector('.user-message');
var speechText = "";
var message = new SpeechSynthesisUtterance();
speakButton.addEventListener('click',() => {
    speechText = userMessage.value
    console.log(speechText);
    
    if(speechText != ""){
       message.text = userMessage.value;
    }else {
    message.text = "Please write something.";
    }

    window.speechSynthesis.speak(message);
})

