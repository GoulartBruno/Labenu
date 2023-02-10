# Responsividade - Exercício

### Setup do projeto no Git

**Siga esses passos pra fazer o setup e poder trabalhar no seu projeto:**

-  [ ] Crie um **fork** deste projeto.
   <details>
      <summary>Esqueceu como se faz?</summary>
      <img src="https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/gerais%2Ffork.png?alt=media&token=7030e997-246a-41fe-a75f-2a2ced61e54d" alt="Fork a sua própria cópia de nome-do-repo"/>
   </details>
-  [ ] Clone sua **PRÓPRIA** versão do repositório
   <details>
      <summary>Esqueceu como se faz?</summary>
      <img src="https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/gerais%2Fclone-repo.png?alt=media&token=d8b3c101-c6d4-4371-b018-ae4edec7e34c" alt="Garanta que o repositório é seu-usuário/nome-do-repo e faça o clone"/>
   </details>
-  [ ] Crie uma nova branch: git checkout -b `<turma-nome-sobrenome-a025>`.
   <details>
      <summary>Entenda o comando `git checkout -b`</summary>
      <p>Na aula vocês aprenderam a criar uma branch (`git branch "nome-branch"`) e se mover até ela (`git checkout "nome-branch"`). Porém, o git permite utilizar contrações para realizar mais de ação com um único comando, que é o caso do (`git checkout -b "nome-branch"`), que cria e automaticamente se move para a branch recém criada.</p>
   </details>
-  [ ] Implemente o projeto na branch `<turma-nome-sobrenome-a025>`. Lembre-se de fazer commits.
-  [ ] Dê push nos commits: git push origin `<turma-nome-sobrenome-a025>`.

**Siga os passos abaixo ao terminar seu projeto, para enviá-lo:**

-  [ ] Envie um Pull Request da sua branch recém enviada, para que seja possível fazer o merge depois. **POR FAVOR NAO FAÇA O MERGE DO SEU PRÓPRIO PULL REQUEST**
-  [ ] Após o momento de feedback e correção, aprove seu Pull Request e faça o merge
-  [ ] Seu projeto será considerado completo quando a aprovação e o merge com a main acontecerem **em seu próprio repositório**.

### Como eu vou executar os exercícios?
Desta vez todos os arquivos .md com o enunciado estão na pasta raíz do repositório, pois iremos utilizar os mesmos arquivos `.html` e `.css`. Dessa vez, você pode alterar **apenas** o arquivo CSS, e ver o resultado acessando o arquivo. No seu navegador de internet (sugerimos o Google Chrome). Para acessar o arquivo, você pode copiar o caminho dele e colar no navegador, ou utilizar a extensão LiveServer. Mais detalhes sobre a extensão no material assíncrono. Além disso, você pode utilizar o Chrome DevTools para entender como estão as propriedades dos elementos do seu projeto.

### O que você precisa saber e praticar desta aula?

Dessa vez, os temas serão os mesmos em todos os exercícios: media-queries, unidades de medida, e breakpoints. Os exercícios de hoje tem como entregável uma página que possui 3 layouts diferentes, a depender da largura da tela.

1. O primeiro layout é para telas de 1200px ou mais de largura;
2. O segundo para telas entre 1200px e 800px de largura (considere 1000 como um ponto de quebra possível);
3. O terceiro para telas de 800px ou menos.

Abaixo, um gabarito das medidas em cada tamanho:
![](https://jslpfmlhyrzjbddidwga.supabase.co/storage/v1/object/public/assets-conteudo/imagens/layouts.png)


E um gif do comportamento esperado:
![](https://jslpfmlhyrzjbddidwga.supabase.co/storage/v1/object/public/assets-conteudo/imagens/responsividade-pratica.gif)

## Informações úteis sobre o assunto:


[Usando media queries | MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries/Using_media_queries)

[Unidades de medida| MDN (em inglês)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
