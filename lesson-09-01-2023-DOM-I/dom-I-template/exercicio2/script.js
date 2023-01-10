const nome = document.getElementById("nome");

const endereco = document.getElementById("endereco");

const email = document.getElementById("email");

const cadastro = {
  nome: nome.value,
  endereno: endereco.value,
  email: email.value,
};

console.log(cadastro);

const limpaInput = () => {
  nome.value = " ";
  endereco.value = " ";
  email.value = " ";
};
