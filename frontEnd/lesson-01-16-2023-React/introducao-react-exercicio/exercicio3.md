# Exercício 3

1. Agora, vamos aprender como utilizar JS dentro do JSX. Repare que os títulos dos vídeos estão todos escritos diretamente nas tags do JSX. Extraia para uma variável `const` essa string _"Título do vídeo"_ (`const titulo = "Título do vídeo"`) e a coloque antes do `return` do seu componente, mas dentro da função `App`. O início da sua função ficará assim:

   ```jsx
   function App() {
   	const titulo = "Titulo do vídeo"

     return (
       <div>...
   ```

2. Depois, onde estão escritos os títulos dos vídeos no JSX, substitua pela constante que foi criada no passo anterior, da seguinte forma: `{nome-da-constante}`. Ou seja, onde estiver no seu JSX escrito "Título do vídeo", você substituirá por `{titulo}`, assim:

   ```jsx
   <div className="box-pagina-principal media1" onclick="reproduzVideo()">
     <img src="https://picsum.photos/400/400?a=1 " alt="" />
     <h4>{titulo}</h4>
   </div>
   ```

   (faça isso para todos os cards de vídeo)

3. Agora, repare que, no código enviado, existe uma função JS, chamada `reproduzVideo`.
   Essa função emite um `alert` avisando sobre a reprodução do vídeo, assim que uma das telas de vídeo é clicada. Ou seja, é usado o método `onClick` para invocar uma função;
4. Antes do `return` do seu componente e depois da constante `titulo`, copie e cole essa função que está sendo invocada no código que enviamos para você. E desse lugar que sua função vai ser invocada. Seu código ficará dessa forma:

   ```jsx
   function App() {
     const titulo = "Título do video"

     function reproduzVideo() {
       alert("O vídeo está sendo reproduzido")
     }

     return (
   		<div>...
   ```

5. Agora, precisamos criar o método de invocar essa função no JSX. Diferentemente do método no HTML puro (que é invocado com a segunda palavra do método começando em letra minúscula), no React, a segunda palavra (no caso `click`) deve começar com letra maiúscula. Ou seja, para invocar uma função com o click no React, o método correto é o `onClick` e não `onclick`;
6. Além disso, a sintaxe de como a função é chamada pelo método é diferente. Em HTML puro, usamos as aspas - `""` - ao redor da função: `onClick="nomeDaFuncao"`. Em React, usamos as chaves - {} - e sem as aspas: `onclick={nomeDaFuncao}`:

   ```jsx
   onClick = { reproduzVideo };
   ```

7. Com todas essas informações em mente, tente fazer a função alert ser chamada em seu código React.
