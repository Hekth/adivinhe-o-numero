window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;


const reconhecimentoDeVoz = new SpeechRecognition();
reconhecimentoDeVoz.lang = 'pt-Br';
reconhecimentoDeVoz.start();

reconhecimentoDeVoz.addEventListener('end', () => reconhecimentoDeVoz.start());

reconhecimentoDeVoz.addEventListener('result', (e) => {
    const resultado = e.results[0][0].transcript.replace(/[?.!]|/g, '');

    mostrarNaTela(resultado);

    validarDado(resultado);
});

function mostrarNaTela(resultado) {
    return divChute.innerHTML = `<div> Você disse: </div> <span class="box"> ${resultado} </span>`;
}