const botao = document.querySelector("button");
const resultado = document.querySelector(".resultado");
const tabela = document.querySelector(".tabela");
const selecionado = document.querySelector(".selecionado");

const linhaUm = document.querySelector(".um");
const linhaDois = document.querySelector(".dois");
const linhaTres = document.querySelector(".tres");
const linhaQuatro = document.querySelector(".quatro");
const linhaCinco = document.querySelector(".cinco");
const linhaSeis = document.querySelector(".seis");

botao.addEventListener("click", function (event) {
  event.preventDefault();

  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const IMC = (peso / (altura * altura)).toFixed(2);
  resultado.textContent = `Resultado: ${IMC}`;
  marcarLinha(IMC);
});

function marcarLinha(IMC) {
  if (IMC <= 18.5) {
    linhaUm.classList.add("selecionado");
    linhaDois.classList.remove("selecionado");
    linhaTres.classList.remove("selecionado");
    linhaQuatro.classList.remove("selecionado");
    linhaCinco.classList.remove("selecioando ");
    linhaSeis.classList.remove("selecionado");
    linhaUm.style.backgroundColor = "FF0F0f";
  } else if (IMC > 18.5 && IMC < 24.9) {
    linhaDois.classList.add("selecionado");
    linhaUm.classList.remove("selecionado");
    linhaTres.classList.remove("selecionado");
    linhaQuatro.classList.remove("selecionado");
    linhaCinco.classList.remove("selecioando ");
    linhaSeis.classList.remove("selecionado");
    linhaDois.style.backgroundColor = "FF0F0f";
  } else if (IMC > 25 && IMC < 29.9) {
    linhaUm.classList.remove("selecionado");
    linhaDois.classList.remove("selecionado");
    linhaTres.classList.add("selecionado");
    linhaQuatro.classList.remove("selecionado");
    linhaCinco.classList.remove("selecioando ");
    linhaSeis.classList.remove("selecionado");
    linhaTres.style.backgroundColor = "FF0F0f";
  } else if (IMC >= 30 && IMC <= 34.9) {
    linhaUm.classList.remove("selecionado");
    linhaDois.classList.remove("selecionado");
    linhaTres.classList.remove("selecionado");
    linhaQuatro.classList.add("selecionado");
    linhaCinco.classList.remove("selecioando ");
    linhaSeis.classList.remove("selecionado");
    linhaQuatro.style.backgroundColor = "FF0F0f";
  } else if (IMC >= 35 && IMC <= 39.9) {
    linhaUm.classList.remove("selecionado");
    linhaDois.classList.remove("selecionado");
    linhaTres.classList.remove("selecionado");
    linhaQuatro.classList.remove("selecionado");
    linhaCinco.classList.add("selecionado");
    linhaSeis.classList.remove("selecionado");
    linhaCinco.style.backgroundColor = "FF0F0f";
  } else if (IMC >= 40) {
    linhaUm.classList.remove("selecionado");
    linhaDois.classList.remove("selecionado");
    linhaTres.classList.remove("selecionado");
    linhaQuatro.classList.remove("selecionado");
    linhaCinco.classList.remove("selecionado");
    linhaSeis.classList.add("selecionado");
    linhaCinco.style.backgroundColor = "FF0F0f";
  } else {
  }
}
