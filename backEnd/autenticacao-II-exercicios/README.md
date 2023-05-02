# Exercício - Autenticação II

<strong>A partir dessa semana os exercícios voltam a ser independentes. Não se preocupe em centralizá-los em um mesmo repo.</strong>
<br><br>
Utilize esse template para criar um repo pessoal na sua conta e trabalhe nele.

## Enunciado

O exercício de hoje pode parecer repetitivo comparado às práticas da aula, mas não se preocupe. Isso acontece porque a geração de ids e fluxos de autenticação (cadastro e login) são sempre muito parecidos em qualquer API RESTful.

### Exercício 1

Proteja o endpoint GET /users obrigando uma auntenticação pelo o envio de token.

### Exercício 2

Adicione um fluxo de autorização no endpoint GET /users para que somente admins possam acessá-lo.

### Exercício 3

Instale as dependências necessárias para gerenciar hashes bcrypt.<br>
Refatore o .env para adicionar a variável de custo.<br>
Refatore os endpoints de signup e login.<br>
Atualize todas as senhas já cadastradas no banco de dados alterando de plaintext para hash.
