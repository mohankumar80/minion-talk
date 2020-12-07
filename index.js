var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-text");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function fullServerUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("An error occured ",error);
    alert("An error has occured, Please try after sometime!!");
}

function clickEventHandler() {
    var inputValue = textInput.value;
    fetch(fullServerUrl(inputValue))
    .then( response => response.json())
    .then( json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler);