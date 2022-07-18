const player1 = "X"
const player2 = "O"
var playTime = player1;
var fimDeJogo = false;
var player = document.querySelectorAll("div#contador img") [0];
var posicao = document.getElementsByClassName("posição");
var vencedor = '';

mostrador();
initialize();


function mostrador() {

    if(fimDeJogo) {return;}
    if(playTime == player1) {
        player.setAttribute("src", "img/x.png");
    }else {
        player.setAttribute("src", "img/circulo.png")
    }
}

function initialize(){

    for(var cont = 0; cont < posicao.length;cont++) {

        posicao[cont].addEventListener('click', function(){
          if(fimDeJogo){return};

        if(this.getElementsByTagName('img').length == 0){

            if(playTime == player1){

                this.innerHTML = "<img src = 'img/x.png'>";
                this.setAttribute('jogada', player1 );
                playTime = player2
            }
            else{
                this.innerHTML = "<img src = 'img/circulo.png'>";
                this.setAttribute('jogada', player2);
                playTime= player1;
            }

            mostrador()
            resultado()

            }

        })

    }
} 

 function resultado() {

    var x1 = document.getElementById('x1').getAttribute("jogada");
    var x2 = document.getElementById('x2').getAttribute("jogada");
    var x3 = document.getElementById('x3').getAttribute("jogada");

    var y1 = document.getElementById('y1').getAttribute("jogada");
    var y2 = document.getElementById('y2').getAttribute("jogada");
    var y3 = document.getElementById('y3').getAttribute("jogada");


    var z1 = document.getElementById('z1').getAttribute("jogada");
    var z2 = document.getElementById('z2').getAttribute("jogada");
    var z3 = document.getElementById('z3').getAttribute("jogada");

    if( (x1 == x2 && x1 == x3 && x1 != "") || 
        (x1 == y1 && x1 == z1 && x1 != "") || 
        (x1 == y2 && x1 == z3 && x1 != "")) {
            vencedor = x1;
            console.log(vencedor);
    }
    if( (y2 == y1 && y2 == y3 && y2 != "") || 
        (y2 == x2 && y2 == z2 && y2 != "") ||
        (y2 == x3 && y2 == z1 && y2 != "")) {
            vencedor = y2
            console.log(vencedor);
        }

    if( (z3 == z2 && z3 == z1 && z3 != "") ||
        (z3 == y3 && z3 == x3 && z3 != "") ){
            vencedor = z3;
            console.log(vencedor);
        }

        if(vencedor != ""){
            fimDeJogo= true;
                if(vencedor == player1)
                    setTimeout(()=> { alert(`${vencedor} VENCEU O JOGO!!`)}, 500);
                if(vencedor == player2)
                    setTimeout (()=> {alert(`${vencedor} VENCEU O JOGO`)}, 500);
            }

 }
 

