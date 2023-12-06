const divChute = document.getElementById('chute');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const reconhecimentoDeVoz = new SpeechRecognition();
reconhecimentoDeVoz.lang = 'pt-Br';

document.addEventListener('click', () => {
    reconhecimentoDeVoz.start();
});

reconhecimentoDeVoz.addEventListener('result', (e) => {
    console.log(e);
    const resultado = e.results[0][0].transcript;
    divChute.innerHTML = `<div> Você disse: </div> <span class="box"> ${resultado} </span>`;
});
