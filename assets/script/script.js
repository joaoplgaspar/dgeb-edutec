function mapaCorNormal(atual, antigo, antigo2) {
    var display = document.getElementById(atual).style.display;
    if(display == "none"){
        document.getElementById(atual).style.display = 'inline-block';
        document.getElementById(antigo).style.display = 'none';
        document.getElementById(antigo2).style.display = 'none';
    }

    var svg = document.getElementById("svg-map");
    var cor = "#158f0a";

    var nordeste = svg.getElementsByClassName("nordeste");
        for (i = 0; i < nordeste.length; i++) {
            nordeste[i].style.fill = cor;
            }

    var norte = svg.getElementsByClassName("norte");
        for (i = 0; i < norte.length; i++) {
            norte[i].style.fill = cor;
            }

    var centroOeste = svg.getElementsByClassName("centro-oeste");
        for (i = 0; i < centroOeste.length; i++) {
            centroOeste[i].style.fill = cor;
            }

    var sudeste = svg.getElementsByClassName("sudeste");
        for (i = 0; i < sudeste.length; i++) {
            sudeste[i].style.fill = cor;
            }

    var sul = svg.getElementsByClassName("sul");
        for (i = 0; i < sul.length; i++) {
            sul[i].style.fill = cor;
            } 
}

function mapaCorRegioes(atual, antigo, antigo2) {
    var display = document.getElementById(atual).style.display;
    if(display == "none"){
        document.getElementById(atual).style.display = 'inline-block';
        document.getElementById(antigo).style.display = 'none';
        document.getElementById(antigo2).style.display = 'none';
    }

    var svg = document.getElementById("svg-map");
    var cores = ["red", "darkgreen", "darkorange", "darkblue", "purple"]; // Nordeste, norte, centro-oeste, sudeste, sul.

    var nordeste = svg.getElementsByClassName("nordeste");
        for (i = 0; i < nordeste.length; i++) {
            nordeste[i].style.fill = cores[0];
        }

    var norte = svg.getElementsByClassName("norte");
        for (i = 0; i < norte.length; i++) {
            norte[i].style.fill = cores[1];
        }

    var centroOeste = svg.getElementsByClassName("centro-oeste");
        for (i = 0; i < centroOeste.length; i++) {
            centroOeste[i].style.fill = cores[2];
        }

    var sudeste = svg.getElementsByClassName("sudeste");
        for (i = 0; i < sudeste.length; i++) {
            sudeste[i].style.fill = cores[3];
        }

    var sul = svg.getElementsByClassName("sul");
        for (i = 0; i < sul.length; i++) {
            sul[i].style.fill = cores[4];
        }
}

function legendaOn(legenda){

    document.getElementById(legenda).style.display = 'table';
}

function legendaOnBotao(legenda){
    document.getElementById(legenda).style.display = 'inline-block';
}

function legendaOff(legenda){
    
    document.getElementById(legenda).style.display = 'none';
}