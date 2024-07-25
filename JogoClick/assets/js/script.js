//Valores base
var pontos = 0;
var valorDoClick = 1;

var upgradeUm = 0;
var upgradeDois = 0;
var upgradeTres = 0;

const valUpUm = 1;
const valUpDois = 8;
const valUpTres = 32;

const custoUpUm = 10;
const custoUpDois = 50;
const custoUpTres = 100;

var contadorUm = 0;
var contadorDois = 0;
var contadorTres = 0;

const reiniciar = document.getElementById("startRestart");

//Mensagen inicial
alert("Olá, clique no \"ACELERA\" para ganhar pontos e trocar por upgrades de cliques");

//Start/restart
reiniciar.addEventListener('click', function(){
        pontos = 0;
        valorDoClick = 1;
        upgradeUm = 0;
        upgradeDois = 0;
        upgradeTres = 0;
        contadorUm = 0;
        contadorDois = 0;
        contadorTres = 0;
        atualizaPts()
        attClick()
        attContador()
        confereDisponibilidade()
    });

//Função para atualizar os pontos
function atualizaPts() {
    document.getElementById("pontos").innerText = pontos + " pts";
    confereDisponibilidade()
}

//Somar pontos
document.getElementById("acelera")
    .addEventListener('click' ,function(){
        pontos += valorDoClick;
        atualizaPts()
        confereDisponibilidade()
        if (pontos>= 2000){
            alert("Fim de jogo");
            alert("Clique no botão \"Start\" para recumeçar")
        }
    }
);

//Somar pontos ao click e atualizar
function addClick(add) {
    valorDoClick += add;
    attClick()
}

function attClick() {
    document.getElementById("clickBase").innerText = "Click = +" + valorDoClick+ " pts";
}

//Varificar se a a posibilidade de comprar um umpgrade

document.getElementById("abastecerUm") 
        .addEventListener ('click', function() {
            if (pontos >= custoUpUm) {
                addClick(valUpUm)
                contadorUm += 1;
                pontos -= custoUpUm;
                atualizaPts()
                attContador()
            }
        }
)

document.getElementById("abastecerDois") 
        .addEventListener ('click', function() {
            if (pontos >= custoUpDois) {
                addClick(valUpDois)
                contadorDois += 1;
                pontos -= custoUpDois;
                atualizaPts()
                attContador()
            }
        }
)

document.getElementById("abastecerTres") 
        .addEventListener ('click', function() {
            if (pontos >= custoUpTres) {
                addClick(valUpTres)
                contadorTres += 1;
                pontos -= custoUpTres;
                atualizaPts()
                attContador()
            }
        }
)

//Atualizar contador
function attContador() {
    document.getElementById("contUm").innerText = "x" + contadorUm;
    document.getElementById("contDois").innerText = "x" + contadorDois;
    document.getElementById("contTres").innerText = "x" + contadorTres;
}

//Muda de cor
function mudaCorUm(){
    if (pontos > custoUpUm) {
        var elemento = document.getElementById("abastecerUm");
        elemento.style.color = "green";
    } else{
        var elemento = document.getElementById("abastecerUm");
        elemento.style.color = "red";
    }
}

function mudaCorDois(){
    if (pontos > custoUpDois) {
        var elemento = document.getElementById("abastecerDois");
        elemento.style.color = "green";
    } else{
        var elemento = document.getElementById("abastecerDois");
        elemento.style.color = "red";
    }
}

function mudaCorTres(){
    if (pontos > custoUpTres) {
        var elemento = document.getElementById("abastecerTres");
        elemento.style.color = "green";
    } else{
        var elemento = document.getElementById("abastecerTres");
        elemento.style.color = "red";
    }
}

function confereDisponibilidade() {
    mudaCorUm()
    mudaCorDois()
    mudaCorTres()
}


atualizaPts()
attClick()