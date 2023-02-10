# Integração com APIs I - Exercício

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)

## O que você precisa saber e praticar desta aula?
1. Integração de API usando o axios
2. Uso de hooks (useState e useEffect)
3. Consumo de API Rest (métodos get/post/put/delete)
4. Sintaxe `.then()` e `.catch()`

## Como eu vou executar os exercícios?

Vamos utilizar a API do Labefy, vista na aula anterior para fazer os exercícios de hoje. Neste exercício, vamos mudar a lista de músicas que está sendo consumida local para a lista que se encontra na **API**.

Para executar este exercício, você pode criar uma nova aplicação React, como foi visto na aula passada, ou utilizar o link abaixo para ir ao template no **CodeSandbox**. Este template para exatamente onde o exercício da última aula acaba.

[**Template do CodeSandbox**](https://codesandbox.io/s/integracao-api-i-exercicio-gexiie)

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.

# API Labefy
[**Link da documentação**](https://documenter.getpostman.com/view/7549981/SztBc8eT?version=latest)

Você recebeu este projeto em andamento. Já tem um pouco de estilização nele, assim como os componentes criados. Sua primeira tarefa é ler o código e procurar entender em qual parte dele precisará aplicar as requisições.

Para iniciar, você pode usar playlists criadas nesta mesma API a partir do Postman.


# Exercício 1
Primeiramente leia a documentação da API, para entender o que cada endpoint **precisa** para ser consumido e **fornece** como resposta. Dados, headers, parâmetros, etc.

# Exercício 2
Para iniciar no código, iremos mudar o arquivo `Playlists.js`. Atualmente as playlists estão como dados mockados no arquivo, mas precisamos que elas venham da API. Altere a origem das playlists.

Lembre-se de instalar o `axios`, e importá-lo quando for necessário.

# Exercício 3
 Agora que já conseguimos consumir as playlists da API, vamos modificar as músicas. Elas também estão como dados mockados e precisam vir da API.
 Atenção para este endpoint: como a API sabe de qual playlist estamos importando as músicas?

## Não inicie os exercícios a seguir antes de ter conseguido resolver os 3 acima!

# Exercício 4
 Já possuímos os dados vindos da API, mas agora precisamos criar uma função para enviar novas músicas para cada playlist.
 (caso prefira, você pode utilizar o link http://spoti4.future4.com.br/1.mp3, mudando apenas o número de cada música, de 1 a 98)

# Exercício 5
 Para finalizar, precisamos criar uma função para remover as músicas de uma playlist (note que já temos um botão no layout para isso, marcado com `x` ao lado de cada música)

## Informações úteis sobre o assunto
1. [Axios (documentação)](https://axios-http.com/docs/intro)
2. [Promise (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
3. [Usando Promises (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises)

