var textArea = document.querySelector("#textarea");
var btnTranslate = document.querySelector("#button");
var outputBox = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslationURL(text){
    var url = serverURL + "?"+ "text" = +text
    console.log(url);
    return url
}
