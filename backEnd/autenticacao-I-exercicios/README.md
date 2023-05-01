# Exercício - Autenticação I

<strong>A partir dessa semana os exercícios voltam a ser independentes. Não se preocupe em centralizá-los em um mesmo repo.</strong>
<br><br>
Utilize esse template para criar um repo pessoal na sua conta e trabalhe nele.

## Enunciado

O exercício de hoje pode parecer repetitivo comparado às práticas da aula, mas não se preocupe. Isso acontece porque a geração de ids e fluxos de autenticação (cadastro e login) são sempre muito parecidos em qualquer API RESTful.

### Exercício 1

Instale as dependências necessárias para criação de uuids, tokens jwt e variáveis de ambiente.<br>
Configure o arquivo .env e refatore os arquivos index.ts e BaseDatabase.ts.

### Exercício 2

Crie o serviço IdGenerator e refatore o endpoint de cadastro de user para que as ids sejam geradas na camada Business.

### Exercício 3

Crie o serviço TokenManager e refatore os endpoints de cadastro e login de user para que devolvam tokens JWT contendo em seu payload informações de id, nome e tipo de conta.
