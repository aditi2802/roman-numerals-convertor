var btnConvert = document.querySelector("#btn-convert");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/roman-numerals.json";

function translationUrl(input) {
    return serverUrl + "?text=" + input;
}

function errorHandler(error){
    console.log("Error occured", error);
    alert("Something is wrong with the server");
}

function clickHandler() {
    var inputValue = txtInput.value;

    fetch(translationUrl(inputValue))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler)
};
btnConvert.addEventListener("click", clickHandler);