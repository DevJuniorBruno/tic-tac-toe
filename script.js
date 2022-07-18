const player1 = "X";
const player2 = "O";
var playTime = player1;
var fimDeJogo = false;

mostrador();
initialize();


function mostrador() {

    if(fimDeJogo) {return;}
    if(playTime == player1) {
        var player = document.querySelectorAll("div#contador img") [0];
        player.setAttribute("src", "/img/x.png");
        console.log(player);
    }else {
        var player = document.querySelectorAll("div#contador img") [0];
        player.setAttribute("src", "img/circulo.png")
    }
}

function initialize(){

    var posicao = document.getElementsByClassName("posição");

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
                this.innerHTML = '<'
            }   
            mostrador()
            initialize()
            }  
        })

        

    }


} 