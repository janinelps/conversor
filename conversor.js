const Converter = (cotacao) => {
  const valor = document.getElementById("valor").value;
  const valorEmDolar = parseFloat(valor);

  const valorEmReal = valorEmDolar * cotacao;

  const elementoValorConvertido = document.getElementById("valorConvertido");
  const valorConvertido = [`O valor convertido é ${valorEmReal.toFixed(1)}`];
  elementoValorConvertido.innerHTML = valorConvertido;
}

const anosLuz = (km) => {

  const kilometros = document.getElementById("valorKm").value;
  const valorEmKm = parseFloat(kilometros);
  const valorEmAnosLuz = valorEmKm * km;

  const valorConvertido = [`O valor em anos luz é ${valorEmAnosLuz}`]
  const elementoValorConvertido = document.getElementById("valorConvertido")
  elementoValorConvertido.innerHTML = valorConvertido;
}

const Temperatura = (conversor) => {
  const celsius = document.getElementById("valorTemperatura").value;
  const valorCelsius = parseFloat(celsius);
  const resultadoTemperatura = valorCelsius * conversor;

  const valorConvertidoKelvin = [`A temperatura convertida é ${resultadoTemperatura}`];
  const elementoConvertido = document.getElementById("valorConvertido");
  elementoConvertido.innerHTML = valorConvertidoKelvin;
}

const TemperaturaFahrenheit = () => {
  const celsius = document.getElementById("valorTemperatura").value
  const valorCelsius = parseFloat(celsius);
  const resultadoTemperaturaFahrenheit = (valorCelsius * 1.8) + 32;

  const valorConvertido = [`A temperatura convertida é ${resultadoTemperaturaFahrenheit}`];
  const elementoConvertido = document.getElementById("valorConvertido");
  elementoConvertido.innerHTML = valorConvertido;

}
