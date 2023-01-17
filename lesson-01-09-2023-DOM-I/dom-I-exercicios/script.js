const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta1");
fruta1.innerHTML = frutas[0];
const fruta2 = document.getElementById("fruta2");
fruta2.innerHTML = frutas[1];
const fruta3 = document.getElementById("fruta3");
fruta3.innerHTML = frutas[2];

/*for(let i=1; i<4;i++){
let arrayFrutas = i-1
const fruta = "fruta-"+i
document.getElementById(`${fruta}`).innerHTML = frutas[arrayFrutas]
}*/

const adicionarFruta = () => {
  let fruta = document.getElementById("novaFruta").value;
  frutas.push(fruta);
  console.log(frutas);
  let fruta4 = document.getElementById("fruta4");
  fruta4.innerHTML = frutas[3];
};
