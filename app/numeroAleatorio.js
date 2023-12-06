const spanMenorValor = document.getElementById('menor-valor');
const spanMaiorValor = document.getElementById('maior-valor');

const maiorValor = 1000;
const menorValor = 1;

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1);
}

spanMenorValor.innerText = menorValor;
spanMaiorValor.innerText = maiorValor;