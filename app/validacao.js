const divChute = document.getElementById('chute');
const body = document.querySelector('body');


function validarDado(dado) {
    if (isNaN(dado)) {
        if (dado.toUpperCase() === 'GAME OVER') {
            body.innerHTML = `
                <h2> GAME OVER! </h2> 
                <h3> O número era: ${numeroAleatorio}</h3>
                <button id="botao-novamente"> Jogar Novamente </button>
            `;
            document.body.addEventListener('click', (e) => {
                //window.location.reload tb recarrega a pagina
                if (e.target.id === 'botao-novamente') {
                    history.go(0);
                }
            });
            return;
        }
        divChute.innerHTML += `<div> O valor precisa ser um número! </div>`
        return false;
    }

    if (dado > maiorValor || dado < menorValor) {
        divChute.innerHTML += `<div> O número deve estar entre ${menorValor} e ${maiorValor} </div>`
        return false;
    }

    compararNumeros(dado);
    return true;
}

function compararNumeros(dado) {
    if (dado > numeroAleatorio) {
        divChute.innerHTML += `<div> O número secreto é menor <i class="fa-solid fa-angles-down"></i> </div>`
    } else if (dado < numeroAleatorio) {
        divChute.innerHTML += `<div> O número secreto é maior <i class="fa-solid fa-angles-up"></i> </div>`
    } else {
        body.innerHTML = `
            <h2> Parabéns, você acertou! </h2> 
            <h3> O número era: ${numeroAleatorio}</h3>
            <button id="botao-novamente"> Jogar Novamente </button>
        `;

        document.body.addEventListener('click', (e) => {
            //window.location.reload tb recarrega a pagina
            if (e.target.id === 'botao-novamente') {
                history.go(0);
            }
        });
    }
}