function personagem(_src, elemento){
    var agua = document.getElementById("agua");
    var fogo = document.getElementById("fogo");
    var terra = document.getElementById("terra");

    localStorage.setItem("elemento", _src);

    if(elemento == "personagemAgua"){
        agua.checked = true;
    }
    if(elemento == "personagemFogo"){
        fogo.checked = true;
    }
    if(elemento == "personagemTerra"){
        terra.checked = true;
    }
}