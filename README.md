<h1>
  Número secreto
</h1>
<h2>
  Descrição geral
</h2>
<p>
  Número secreto é um projeto desenvolvido ao longo do curso "Javascript: validações e reconhecimento de voz" na Alura.
  O projeto consiste em adivinhar um número aleatório gerado pela aplicação utilizando a própria voz!
  Utilizando a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a>, a aplicação consegue reconhecer o que foi dito através de um dispositivo de entrada de áudio e,
  com base nesse dado, fazer as validações necessárias para o jogo funcionar.
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#browser_compatibility"> Ver compatibilidade com navegadores</a>
</p>

<img src="https://github.com/Hekth/adivinhe-o-numero/assets/151862970/80aca3f8-5581-4f6d-93f9-7a3c2c69f261">

<h2>
  Como jogar
</h2>

<p>
  Assim que você entrar no site, caso seja um navegador compatível, a aplicação pedirá permissão para ter acesso ao dispositivo de entrada áudio. Aceite.
  Como já foi dito, também é necessário um navegador compatível e, obviamente, um microfone.
  Após isso, é só dizer algo que já estará funcionando!
</p>

<h2>
  Jogo
</h2>

<p>
  O jogo gerará um número aleatório entre 1 e 1000.
  Receberá o dado e fará várias verificações com base nesse dado.
  Te retornará uma dica na tela, se o número é maior ou menor que o número secreto.
  Caso você acerte, irá mostrar uma página "nova" com um botão de jogar novamente.
</p>

<h2>
  Validações
</h2>

<ul>
  <li>Verificará se o que foi dito é um número</li>
  <li>Verificará se o que foi dito compreende entre 1 e 1000</li>
  <li>Verificará se o número dito é maior, menor ou igual ao número secreto</li>
</ul>

<h2><a href="https://secretnumber-hekth.vercel.app/">Para testar clique aqui</a></h2>
