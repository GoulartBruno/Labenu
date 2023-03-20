# Exercício 3
Crie um joguinho simples utilizando os conceitos vistos em aula. Temos alguns exemplos abaixo para auxiliar, você pode escolher um deles ou pensar em outro se quiser!
Colocamos uma dica no final desse readme de como gerar números aleatórios no JS.
<br>

## par-ou-impar.js
Crie o arquivo par-ou-impar.js e implemente o famoso joguinho!
A funcionalidade é:
- jogador é você, dev
- suas escolhas devem ser enviadas via argumentos no comando do terminal (process.argv)
    - par ou impar
    - e um número
- o adversário é o computador (que faz uma escolha aleatória)
- exemplos de fluxo:
    - ```node par-ou-impar.js par 1```
        - aparece no console: "Você escolheu par e o computador escolheu impar. O resultado foi 6. Você ganhou!"
    - ```node par-ou-impar.js impar 3```
        - aparece no console: "Você escolheu impar e o computador escolheu par. O resultado foi 4. Você perdeu!"
    - ```node par-ou-impar.js par 2```
        - aparece no console: "Você escolheu par e o computador escolheu impar. O resultado foi 2. Você ganhou!"

<br>

## pedra-papel-tesoura.js
Crie o arquivo pedra-papel-tesoura.js e implemente o famoso joguinho!
A funcionalidade é:
- jogador é você, dev
- sua escolha deve ser enviada via argumento no comando do terminal (process.argv)
- o adversário é o computador (que faz uma escolha aleatória)
- exemplos de fluxo:
    - ```node pedra-papel-tesoura.js pedra```
        - aparece no console: "Você escolheu pedra e o computador escolheu tesoura. Você ganhou!"
    - ```node pedra-papel-tesoura.js papel```
        - aparece no console: "Você escolheu papel e o computador escolheu tesoura. Você perdeu!"
    - ```node pedra-papel-tesoura.js tesoura```
        - aparece no console: "Você escolheu tesoura e o computador escolheu tesoura. Empate!"

<br>

# Dica: como gerar um número aleatório em JS
Número aleatório entre o valor min e o valor max (incluem ambas extremidades).
```
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const numeroAleatorioEntreZeroeDez = getRndInteger(0, 10)
console.log(numeroAleatorioEntreZeroeDez)

const numeroAleatorioEntreUmeNove = getRndInteger(1, 9)
console.log(numeroAleatorioEntreUmeNove)

const numeroAleatorioEntreDezeQuinze = getRndInteger(10, 15)
console.log(numeroAleatorioEntreDezeQuinze)
```
