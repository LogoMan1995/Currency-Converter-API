const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
async function convert() {
  const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  const data = await response.json();
  const rates = {
    RUB: 1,
    USD: data.Valute.USD.Value / data.Valute.USD.Nominal,
    EUR: data.Valute.EUR.Value / data.Valute.EUR.Nominal,};
  const amountInRub = amount.value * rates[from.value];
  const convertedAmount = amountInRub / rates[to.value];
  result.textContent = `Результат: ${convertedAmount.toFixed(2)} ${to.value}`;}
