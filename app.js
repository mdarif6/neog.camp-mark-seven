var textInput = document.querySelector(".txt-input");
var buttonTranslate = document.querySelector(".btn");
var outputText = document.querySelector(".output");

var url = "https://api.funtranslations.com/translate/morse.json";

function getURL(input) {
  return url + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured ", error);
  alert("something worong with your server");
}

function clickHandler() {
  var inputText = textInput.value;
  console.log(textInput);
  fetch(getURL(inputText))
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var translatedData = data.contents.translated;
      outputText.innerText = translatedData;
    });
}

buttonTranslate.addEventListener("click", clickHandler);
