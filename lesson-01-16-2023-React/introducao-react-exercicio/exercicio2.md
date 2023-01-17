# Exercício 2

1. Depois disso, ainda no código puro que enviamos pra você, dentro da tag `body`, pegue esse HTML modificado e transfira para dentro do `return` da função `App` que está no arquivo `App.js` do projeto React. Mais precisamente, dentro da div vazia que você criou no exercício anterior;
    
    
2. Repare que você inseriu **HTML** (com algumas modificações do exercício anterior) dentro de um arquivo com final `.js`. É isso que chamamos ***JSX***. Apesar de ele ser praticamente idêntico ao HTML, ele é um código JS que, "por debaixo dos panos", é transformado pelo React em um HTML para o navegador. Caso você tenha mais dúvidas, pergunte aos seus colegas no fórum e retorne aos materiais que enviamos a você;
    
    
3. Agora, pegue o CSS que está no código puro que enviamos para você, no arquivo `style.css`, e transfira para o arquivo `App.css`. Lembre-se de apagar tudo o que estiver dentro desse arquivo `App.css` antes de transferir as informações;
    
    
4. Apenas isso já seria suficiente para fazer funcionar o seu CSS. Mas isso pode gerar um problema mais para frente. Veremos que a palavrinha `class` vai ser usada para outras funcionalidades no JavaScript, além da conhecida até agora no CSS. Por isso, o React criou uma nova forma alternativa de nomeá-las, por meio do `className`. 
Por isso, vá em seu JSX e mude os lugares onde estão escrito `class` para `className`. Repare que a mudança de nome de `class` para `className` manteve o CSS funcionando. Acostume-se com essa nova sintaxe, agora, a `class` que conhecíamos no HTML deve ser escrita no JSX como `className`;