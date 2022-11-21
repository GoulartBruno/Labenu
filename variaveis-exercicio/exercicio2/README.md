# Exercício 2

Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial

```jsx
let a = 10
let b = 25
```

Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

```jsx
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
```

Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). 

## Dicas

<details>
<summary>💡 Dica 1</summary>

 >⭐ Podemos começar fazendo com que o valor de a seja igual ao que está no b, então ficaria assim: `a = b`.
>Nesse ponto, se déssemos um `console.log` no `a` e no `b`, teríamos que `a = 25` e `b = 25` 
>Mas desse jeito, a gente perdeu o valor anterior que estava no `a`! E agora, como você poderia guardar esse valor para atribuir à variável `b`? 🤔

</details>

<details>
<summary>💡 Dica 2</summary>

>⭐ Vamos supor que você tem dois copos: um copo A que tem suco de laranja e um copo B que tem coca-cola. Como você faria para trocar o conteúdo dos dois?

![](https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/variaveis%2Fcopo3.png?alt=media&token=e4c08185-cba6-495a-bf78-a05d92b34948)

</details>

<details>
<summary>💡 Dica 3</summary>

>⭐ Para trocar os líquidos de copo sem misturá-los, você pode pegar um copo vazio para te auxiliar!

![](https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/variaveis%2Fcopo4.png?alt=media&token=4b8dead0-8aa8-4990-9834-6e54bc1fa806)

</details>

<details>
<summary>💡 Dica 4</summary>

Trocando os copos

![](https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/variaveis%2Fcopo5.png?alt=media&token=67d0f98a-0069-441e-93b3-9342bde033e2)
![](https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/variaveis%2Fcopo6.png?alt=media&token=5185547e-fd13-4f85-a6cc-6894ca71b4db)
![](https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/variaveis%2Fcopo7.png?alt=media&token=f631629a-d599-4a44-b3fd-fadf21ed7b93)


</details>
