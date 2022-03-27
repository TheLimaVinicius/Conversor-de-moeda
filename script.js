const valorElemento = document.getElementById("valor");
const button = document.getElementById("btn");

button.disabled = true;
valorElemento.addEventListener("input", function (event) {
  let conteudo = valorElemento.value;

  if (conteudo !== NaN && conteudo !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

function converter() {
  let valor = parseFloat(valorElemento.value);
  let elementoValorConvertido = document.getElementById("valorConvertido");
  let moeda = document.getElementById("moedaReferencia").value;


  if (moeda == "dolar") {
    let realEmDolar = (valor / 5.08).toFixed(2);
    let valorParaDolar = `US$ ${realEmDolar}`;
    elementoValorConvertido.innerHTML = valorParaDolar;
  } else if (moeda == "euro") {
    let realEmEuro = (valor / 5.5).toFixed(2);
    let valorParaEuro = "€" + realEmEuro;
    elementoValorConvertido.innerHTML = valorParaEuro;
  } else if (moeda == "iene") {
    let realEmIene = (valor * 23.11).toFixed(2);
    let valorParaIene = "¥" + realEmIene;
    elementoValorConvertido.innerHTML = valorParaIene;
  } else if (moeda == "btc") {
    let realEmBtc = (valor / 197782).toFixed(10);
    let valorParaBtc = "฿" + realEmBtc;
    elementoValorConvertido.innerHTML = valorParaBtc;
  }
}