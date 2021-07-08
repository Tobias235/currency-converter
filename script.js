let select = document.querySelector('.currency');
let selectEnd = document.querySelector('.end');
let customInput = document.querySelector('.customInput');
let btn = document.querySelector('button');
let showResult = document.querySelector('.result');

var requestURL = `https://api.exchangerate.host/latest`;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let html;

request.onload = function() {
  var response = request.response;

  const propertyKeys = Object.keys(response.rates);
  const propertyValues = Object.values(response.rates);
  for (let i = 0; i < propertyValues.length; i++) {
    let opt = document.createElement('option');
    opt.value = propertyValues[i];
    opt.innerHTML = propertyKeys[i];
    selectEnd.appendChild(opt);
  }
  for (let i = 0; i < propertyValues.length; i++) {
    let opt = document.createElement('option');
    opt.value = propertyValues[i];
    opt.innerHTML = propertyKeys[i];
    select.appendChild(opt);
  }
}

function convert(requestURL) {
  let result = Number((selectEnd.value / select.value));
  let finalResult = (result * customInput.value);
  showResult.innerHTML = finalResult.toFixed(2);
}



btn.addEventListener('click', convert);
