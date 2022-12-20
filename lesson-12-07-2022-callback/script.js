const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

// Declare duas funções:
// A primeira deve receber um array de números, e retornar todos os números do array multiplicados por 3;

function multiplicarPor3(array) {
  const novoArray = [];
  for (numero of array) {
    novoArray.push(numero * 3);
  }
  return novoArray;
}
// for = para(cada numero do array)

// A segunda deve receber um array de números, e retornar um array apenas com os números pares.
const retornaPares = (array) => {
  console.log("entrou na retorna pares");

  const novoArray = [];
  for (numero of array) {
    if (numero % 2 === 0) {
      novoArray.push(numero);
    }
  }
  console.log("saindo da retorna pares");

  return novoArray;
};

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayNumeros2 = [7, 3, 6, 8, 4, 2, 5];
// console.log("Multiplica arr1", multiplicarPor3(arrayNumeros))
// console.log("Multiplica arr2", multiplicarPor3(arrayNumeros2))
// console.log("Retorna pares arr1", retornaPares(arrayNumeros))
// console.log("Retorna pares arr2", retornaPares(arrayNumeros2))

// Em seguida, crie uma função que deve receber como parâmetros um array e uma função. O corpo da função deve chamar a função callback, passando o array argumento e guardando o valor do novo array em uma variável. Em seguida, esta função vai imprimir os valores do novo array no console.

function imprimir(array, callback) {
  const novoArray = callback(array);
  console.log("dentro da funcao imprimir", novoArray);
}

// Faça duas chamadas da função acima, passando, em cada chamada, um array e uma das funções criadas anteriormente como callback.
imprimir(arrayNumeros, multiplicarPor3);
imprimir(arrayNumeros, retornaPares);

// Refaça o item “A primeira deve receber um array de números, e retornar todos os números do array, multiplicados por 3”, dessa vez utilizando a função de array map().

function multiplicaPor3map(array) {
  const novoArray = array.map((numero) => {
    return numero * 3;
  });
  return novoArray;
}
imprimir(arrayNumeros, multiplicaPor3map);

// Refaça o item “A segunda deve receber um array de números, e retornar um array apenas com os números pares”, dessa vez utilizando a função filter()
function retornaParesFilter(array) {
  return array.filter((numero) => numero % 2 === 0);
}

imprimir(arrayNumeros, retornaParesFilter);

// ======================================
//          SINTAXE MAP E FILTER
// ======================================
// // o Map percorre cada elemento do array e define o que será alterado/retornado de cada um. Retorna sempre um array com o mesmo nº de elementos do original
// array.map((elemento) => elemento)
// array.map((elemento) => {
//   return elemento
// })

// // o Filter percorre cada elemento do array e define quais serão retornados com base em true ou false. Retorna sempre um array com o mesmo nº de elementos do original ou menor (dependendo das condições)
// array.filter((elemento) => elemento === true)
// array.filter((elemento) => {
//   if (elemento === true) {
//     return elemento
//   }
// })

// ======================================

// ======================================

// EXERCÍCIO FINAL
// Com o array de pokémons do template, faça o seguinte:
// Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;

const cura = (pokemon) => {
  return { ...pokemon, vida: 100 };
};
// Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;

const pokemonsVidaCheia = pokemons.map((pokemon) => {
  return cura(pokemon);
});
console.log(pokemonsVidaCheia);

// Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback, que deve retornar apenas os pokemons do tipo fogo.

const pokemonsDeFogo = pokemons.filter((pokemon) => {
  return pokemon.tipo === "fogo";
});

console.log(pokemonsDeFogo);
