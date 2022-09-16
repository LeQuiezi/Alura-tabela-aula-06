//A intenção do jogo é armazenar todos os participantes e suas respectivas pontuações, para isso iremos criar objetos {}
var rafa = { 
    nome:"Rafa",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
}
var paulo = {
    nome:"Paulo",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
}
var gui = {
    nome:"Guilherme",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
}

/*Acessando informações dos objetos:
console.log(rafa.vitorias);
*/
rafa.pontos = calculaPontos(rafa);
paulo.pontos =  calculaPontos(paulo);
gui.pontos  = calculaPontos(gui);


function calculaPontos(jogador) {
    var pontuacao = jogador.vitorias * 3 + jogador.empates;
    
    return pontuacao;
}
console.log(rafa);
console.log(paulo);

//LISTA DE JOGADORES:
var jogadores = [rafa, paulo, gui]

function jogadoresNaTela(jogadores) {
    var elemento = ""
    for (var indice = 0; indice < jogadores.length; indice++) {

        elemento += "<tr><td>" + jogadores[indice].nome + "</td>"
        elemento += "<td>" + jogadores[indice].vitorias + "</td>"
        elemento += "<td>" + jogadores[indice].empates + "</td>"
        elemento += "<td>" + jogadores[indice].derrotas + "</td>"
        elemento += "<td>" + jogadores[indice].pontos + "</td>"
        elemento += "<td><button class='btn-vitoria' onclick='adicionarVitoria(" + indice + ")'>Vitória</button></td>"
        elemento += "<td><button class='btn-empate' onclick='adicionarEmpate(" + indice + ")'>Empate</button></td>"
        elemento += "<td><button class='btn-derrota' onclick='adicionarDerrota(" + indice + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }
   var tabelaJogadores = document.getElementById("tabela-jogadores");
   tabelaJogadores.innerHTML = elemento;   
}

//EXIBINDO OS JOGADORES NA TELA
jogadoresNaTela(jogadores);

//UTILIZANDO OS BOTÕES:
function adicionarVitoria(indice) {
    var jogador = jogadores[indice];
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador);
    jogadoresNaTela(jogadores);
}
function adicionarEmpate(indice) {
    var jogador = jogadores[indice];
    jogador.empates++
    jogador.pontos = calculaPontos(jogador);
    jogadoresNaTela(jogadores);
}
function adicionarDerrota(indice) {
    var jogador = jogadores[indice];
    jogador.derrotas++
    jogadoresNaTela(jogadores);
}