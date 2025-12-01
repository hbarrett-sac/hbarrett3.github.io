function big() {
    var textArea = document.getElementById("textarea");
    textArea.style.fontSize = "4em";
}

function styleHandler() {

    var textArea = document.getElementById("textarea");
    var fancyRadio = document.getElementById("fancyRadio");
    var boringRadio = document.getElementById("boringRadio");

    // If FancyShmancy is selected → apply styles
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }

    // If BoringBetty is selected → remove styles / reset
    if (boringRadio.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = ""; // removes inline color
        textArea.style.textDecoration = "none";
    }
}

function moo() {
    var textArea = document.getElementById("textarea");
    var sentences = textArea.value.split(".");
    var finalText = "";
    for (var i = 0; i < sentences.length; i++) {
        if (!(sentences[i].trim().length === 0)) 
            sentences[i] = sentences[i].trim() + " -Moo.";
    }
    finalText = sentences.join("\n");
    textArea.value = finalText.toUpperCase();
}
