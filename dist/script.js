var carta01= {
    nome: "hulk - Supertrunfo",
    imagem: "https://i.pinimg.com/originals/54/ea/48/54ea48679fb376d9f067b63f0815fc36.jpg",
    atributos: {
        ataque: 100,
        defesa: 70,
        magia: 90
    }
}

var carta02 = {
    nome: "Iron man",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpGflUNH7mPzMK7twD-9HEJGbkaJAA0PlmQ&usqp=CAU",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var carta03= {
    nome: "Lorde Darth Vader",
    imagem: "https://cdn.singulart.com/artworks/v2/cropped/5877/main/fhd/713867_6ed990ab826a4975c232711091e55cdc.jpeg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}


var cartaMaquina
var cartaJogador
var cartas = [carta01, carta02, carta03]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibeCartaJogador()
    
}
function exibeCartaJogador(){
  divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
   for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " +cartaJogador.atributos[atributo] + "<br>"
    }
    var html = "<div id='id=opcoes' class='carta-status'>"
    
   divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto +'</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
    } else {
       htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()
}

function exibeCartaMaquina(){
  divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
   for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " +cartaMaquina.atributos[atributo] + "<br>"
    }
    var html = "<div id='id=opcoes' class='carta-status'>"
    
   divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto +'</div>'
}