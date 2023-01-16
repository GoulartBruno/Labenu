# Exercício 1

1.  Crie um app React dentro da pasta que você fará o projeto de hoje, usando o comando `npx create-react-app nome-do-seu-app`. É esperado que uma pasta raiz seja criada com o nome escolhido por você no comando anterior. Nessa pasta, haverá essa distribuição de documentos:
    
    
    ![Estrutura do React](https://jslpfmlhyrzjbddidwga.supabase.co/storage/v1/object/public/assets-conteudo/imagens/estrutura-react.png)
    
2. Pelo terminal, entre na pasta raiz que foi criada e rode o comando `npm run start`, para que o seu projeto React rode no seu navegador. Repare que o layout padrão do App React vai abrir na sua tela: símbolo azul do React rodando em um fundo escuro, com um escrito em branco em baixo (`Edit src/App.js and save to reload`) e um link para a documentação do React (`Learn React`);
    
    
3. Isso é o que vem por padrão em todo App React que você cria. Para tirá-lo e colocar o seu próprio código, basta apagar o que está dentro do `return` do seu arquivo `App.js` e colocar no lugar, dentro do `return`, uma div vazia (`<div></ div>`). Se você recarregar a tela, verá que tudo ficará em branco;
    
    
4. Agora, vamos aprender o que é JSX. Apesar de no React usarmos umas sintaxe bem parecida com as tags do HTML, não se trata de HTML de fato. Mas sim, JSX, que você pode saber um pouco mais revisitando o material assíncrono. Dito isso, o JSX tem uma sintaxe um pouco diferente para algumas  tags que estamos acostumados.
    
    Como exemplo disso, podemos citar a tag `input`. Sua sintaxe, no JSX, não é mais assim: `<input>`. Ela passa a ser assim: `<input />`. Na verdade, todas as tags que precisam apenas de uma <>, como `img` ou `hr`, passam a ser usadas dessa forma, com uma barra antes do fechamento: `< />`;
    
5. Portanto, antes de passarmos o HTML para o nosso app React, certifique-se de mudar as tags que não possuem fechamento. trocando o seu final de `>`, para `/>`. Como exemplo dessa mudança, a linha 16 ficará dessa forma: 
    
    ```jsx
    <input type="text" placeholder="Busca" id="campoDeBusca" />
    ```