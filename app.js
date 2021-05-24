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
}
  fetch(getURL(inputText))
    .then(async function(response) {
      try {
        const json = await response.json();
        console.log(json);
        var translatedData = json.contents.translated;
        outputText.innerText = translatedData;
      } catch (error) {
        return errorHandler(error);
      }
}

buttonTranslate.addEventListener("click", clickHandler)
