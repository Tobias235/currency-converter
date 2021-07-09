let fromCurrency = document.querySelector('.fromCurrency');
let toCurrency = document.querySelector('.toCurrency');
let customInput = document.querySelector('.customInput');
let btn = document.querySelector('button');
let showResult = document.querySelector('.result');

var requestURL = `https://api.exchangerate.host/latest`;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
  console.log(response);

  const propertyKeys = Object.keys(response.rates);
  const propertyValues = Object.values(response.rates);
  for (let i = 0; i < propertyValues.length; i++) {
    const opt = document.createElement('option');
    opt.value = propertyValues[i];
    opt.innerHTML = propertyKeys[i];
    toCurrency.appendChild(opt);
  }
  for (let i = 0; i < propertyValues.length; i++) {
    const opt = document.createElement('option');
    opt.value = propertyValues[i];
    opt.innerHTML = propertyKeys[i];
    fromCurrency.appendChild(opt);
  }
}

function convert() {
  const result = Number((toCurrency.value / fromCurrency.value));
  const finalResult = (result * customInput.value);
  const text = toCurrency.options[toCurrency.selectedIndex].text;
  // console.log(text);
  showResult.innerHTML = finalResult.toFixed(2) + ' ' +text;
}


btn.addEventListener('click', convert);
