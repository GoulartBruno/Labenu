let myInput = document.getElementById("password");

const escondeSenha = (event) => {
  event.preventDefault();
  myInput.setAttribute("type", "password");
  const div = document.querySelector(".light");
  div.classList.remove("light");
  div.classList.add("dark");
};
