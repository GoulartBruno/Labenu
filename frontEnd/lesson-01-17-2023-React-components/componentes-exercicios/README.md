# Componentes - Exercício

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)

## O que você precisa saber e praticar desta aula?
1. Criação de componentes no React;
2. importar e exportar arquivos e componentes;
3. Aninhar componentes.


## Como eu vou executar os exercícios?

Vamos utilizar o LabeTube, da aula anterior, que foi transferido para um app React, para fazer os exercícios da aula de hoje. Neste exercício, vamos transformar a lista de vídeos em **componentes React**.

Para executar este exercício, você pode criar uma nova aplicação React, como foi visto na aula passada, ou utilizar o link abaixo para ir ao template no **CodeSandbox**. Este template para exatamente onde o exercício da última aula acaba.

[**Template do CodeSandbox**](https://codesandbox.io/s/template-exercicio-componentes-5gp0bf)

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.

# Exercício 1

Primeiro, vamos criar um componente para representar o Card de Vídeo. Chame-o de **CardVideo**. Para facilitar nosso trabalho, crie este Componente em um arquivo chamado `CardVideo.js`.
Agora, os cards de vídeo serão chamados por meio deste componente. Portanto, altere os elementos HTML que foram criados no nosso `App.js`, para que ao invés de serem HTML, serem o componente `CardVideo`. Todos os vídeos terão a mesma aparência, mas enquanto não conhecemos `props` (matéria da próxima aula), podemos deixar assim.

Lembre-se de tornar a função exportável, e importá-la no `App.js`.

# Exercício 2
Depois de criar o CardVideo, crie um componente **InfosUsuario**, que guarde uma imagem e um nome de usuário. Vamos criar este componente, pois estas informações são passíveis de reutilização em outros contextos. Crie um arquivo `InfosUsuario.js` para guardar este componente. Todos os vídeos terão o mesmo autor, por ora.

# Exercício 3
 Após criar ambos os componentes, adicione `InfosUsuario` ao corpo do componente que guarda os cards do video. Agora, seu `App.js` deve exibir cards de vídeo iguais, que contenham também informações sobre o usuário que fez o vídeo.


## Informações úteis sobre o assunto
[Components (em inglês) | Geeks for Geeks](https://www.geeksforgeeks.org/reactjs-components/)

