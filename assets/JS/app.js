const peso = document.querySelector("#peso");

const altura = document.querySelector("#altura");

const botao = document.querySelector("button");

const resultado = document.querySelector(".resultado");

const tabela = document.querySelector(".tabela");

botao.addEventListener("click", function () {
  const valorDoPeso = peso.value;
  const valorDaAltura = altura.value;
  const IMC = (valorDaAltura * valorDaAltura) / valorDoPeso;

  resultado.textContent = `Seu IMC ${IMC}`;
  const .selecionado 

});
