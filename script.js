var cartas = [
  {
    nome: "Nobel",
    imagem:
      "https://raw.githubusercontent.com/EzequielFelipeBorgelt/Top-Trump-STI/main/nobel1.JPG",
    atributos: { Snatch: 9, Run: 6, DU: 8, Row: 5 }
  },

  {
    nome: "Mateo",
    imagem:
      "https://raw.githubusercontent.com/EzequielFelipeBorgelt/Top-Trump-STI/main/mateo.JPG",
    atributos: { Snatch: 8, Run: 6, DU: 5, Row: 7 }
  },

  {
    nome: "Junior",
    imagem:
      "https://raw.githubusercontent.com/EzequielFelipeBorgelt/Top-Trump-STI/main/junior.JPG",
    atributos: { Snatch: 9, Run: 7, DU: 4, Row: 8 }
  },

  {
    nome: "Wladimir",
    imagem:
      "https://raw.githubusercontent.com/EzequielFelipeBorgelt/Top-Trump-STI/main/wladimir.JPG",
    atributos: { Snatch: 9, Run: 7, DU: 7, Row: 6 }
  },

  {
    nome: "Samuel",
    imagem:
      "https://raw.githubusercontent.com/EzequielFelipeBorgelt/Top-Trump-STI/main/samuel.JPG",
    atributos: { Snatch: 5, Run: 7, DU: 8, Row: 9 }
  },
  {
    nome: "Chema",
    imagem:
      "https://raw.githubusercontent.com/EzequielFelipeBorgelt/Top-Trump-STI/main/chema.JPG",
    atributos: { Snatch: 6, Run: 9, DU: 5, Row: 7 }
  },

  {
    nome: "Cristopher",
    imagem:
      "https://raw.githubusercontent.com/EzequielFelipeBorgelt/Top-Trump-STI/main/chirstopher.JPG",
    atributos: { Snatch: 6, Run: 9, DU: 6, Row: 8 }
  },

  {
    nome: "Cocho",
    imagem:
      "https://raw.githubusercontent.com/EzequielFelipeBorgelt/Top-Trump-STI/main/cocho.JPG",
    atributos: { Snatch: 9, Run: 7, DU: 4, Row: 8 }
  },
  {
    nome: "Antonio",
    imagem:
      "https://raw.githubusercontent.com/EzequielFelipeBorgelt/Top-Trump-STI/main/antonio.JPG",
    atributos: { Snatch: 9, Run: 6, DU: 8, Row: 5 }
  },
  {
    nome: "Ezequiel",
    imagem:
      "https://raw.githubusercontent.com/EzequielFelipeBorgelt/Top-Trump-STI/main/ezequiel1.JPG",
    atributos: { Snatch: 6, Run: 5, DU: 2, Row: 9 }
  }
];

var cartaMaquina = [];
var cartaJogador = [];

var cartaMaquinaSorteada;
var cartaJogadorSorteada;

var cartaPartidaJogador;
var cartaPartidaMaquina;

function sortearCarta() {
  document.getElementById("btnPartida").disabled = false;
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquinaSorteada = cartas[numeroCartaMaquina];
  cartaMaquina.push(cartaMaquinaSorteada);
  cartas.splice(numeroCartaMaquina, 1);

  while (cartaMaquina.length < 5) {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquinaSorteada = cartas[numeroCartaMaquina];
    cartaMaquina.push(cartaMaquinaSorteada);
    cartas.splice(numeroCartaMaquina, 1);
  }

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);

  while (cartaJogador.length < cartaMaquina.length) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogadorSorteada = cartas[numeroCartaJogador];
    cartaJogador.push(cartaJogadorSorteada);
    cartas.splice(numeroCartaJogador, 1);
  }

  document.getElementById("btnSortear").disabled = true;

  mostrarListaCartasJogador();
  sortearUmaCartaSua();
}

function mostrarListaCartasJogador() {
  var divListaCartasJogador = document.getElementById("cartas-jogador");
  var opcoesCartas = "";

  if (cartaJogador.length == 0) {
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnPartida").disabled = true;
    divResultado.innerHTML =
      "<p class='resultado-final'>The game is over and unfortunately you lost.</p>";
  } else if (cartaMaquina.length == 0) {
    divResultado.innerHTML =
      "<p class='resultado-final'>The game is over and you WON, Congratulations!!!</p>";
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnPartida").disabled = true;
  } else {
    for (var c = 0; c < cartaJogador.length; c++) {
      opcoesCartas += "<p align=left >" + cartaJogador[c].nome + "<br>";
    }
  }

  divListaCartasJogador.innerHTML =
    "<h2>Here is your deck of cards:</h2>" + opcoesCartas + "</p>";
}

function sortearUmaCartaSua() {
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnPartida").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  var cartaSorteada = parseInt(Math.random() * cartaJogador.length);
  cartaPartidaJogador = cartaJogador[cartaSorteada];

  var cartaMaquinaSorteada = parseInt(Math.random() * cartaMaquina.length);
  cartaPartidaMaquina = cartaMaquina[cartaMaquinaSorteada];

  exibirCarta();

  let divCartaMaquina = document.getElementById("carta-maquina");

  divCartaMaquina.style.backgroundImage = "none";

  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";

  divCartaMaquina.innerHTML = moldura;
  divResultado.innerHTML = "";
}

function exibirCarta() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var nome = `<p class="carta-subtitle">${cartaPartidaJogador.nome}</p>`;
  var opcoes = "";

  divCartaJogador.style.backgroundImage = `url(${cartaPartidaJogador.imagem})`;
  for (var atributos in cartaPartidaJogador.atributos) {
    opcoes +=
      "<input type='radio' name='atributo' class='botoes' value='" +
      atributos +
      "' id='" +
      atributos +
      "'><label for='" +
      atributos +
      "' class='input-label'>" +
      atributos +
      ": " +
      cartaPartidaJogador.atributos[atributos] +
      "</label><br>";
  }

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoes + "</div>";
}

var radioAtributos = document.getElementsByName("atributo");

function obtemAtributoSelecionado() {
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

var divResultado = document.getElementById("resultado");

function jogar() {
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnPartida").disabled = false;
  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();

  var atributoSelecionado = obtemAtributoSelecionado();
  var valorJogador = cartaPartidaJogador.atributos[atributoSelecionado];
  var valorMaquina = cartaPartidaMaquina.atributos[atributoSelecionado];

  console.log(valorJogador);
  console.log(valorMaquina);

  if (atributoSelecionado == undefined) {
    divResultado.innerHTML =
      "<p class='resultado-final'>You need to select an attribute </p>";
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("btnPartida").disabled = true;
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = "none";
    var moldura =
      "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";
    divCartaMaquina.innerHTML = moldura;
  } else if (valorJogador > valorMaquina) {
    divResultado.innerHTML =
      "<p class='resultado-final'>Congratulations, you won!!!</p>";

    for (var nomes in cartaMaquina) {
      if (cartaMaquina[nomes].nome == cartaPartidaMaquina.nome) {
        cartaMaquina.splice(nomes, 1);
        cartaJogador.push(cartaPartidaMaquina);
        cartaPartidaMaquina = "";
        cartaPartidaJogador = "";
      }
    }
  } else if (valorJogador < valorMaquina) {
    divResultado.innerHTML =
      "<p class='resultado-final'>You lost!!! good luck next round!</p>";

    for (var nomes in cartaJogador) {
      if (cartaJogador[nomes].nome == cartaPartidaJogador.nome) {
        cartaJogador.splice(nomes, 1);
        cartaMaquina.push(cartaPartidaJogador);
        cartaPartidaMaquina = "";
        cartaPartidaJogador = "";
      }
    }
  } else if (valorJogador == valorMaquina) {
    divResultado.innerHTML = "<p class='resultado-final'>There was a tie!!</p>";
  }

  mostrarListaCartasJogador();
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";

  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoes = "";
  divCartaMaquina.style.backgroundImage = `url(${cartaPartidaMaquina.imagem})`;

  for (var atributos in cartaPartidaMaquina.atributos) {
    // console.log(atributos);

    opcoes +=
      "<p>" +
      atributos +
      ": " +
      cartaPartidaMaquina.atributos[atributos] +
      "<br>";
  }

  var nome = `<p class="carta-subtitle">${cartaPartidaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoes + "</p></div>";
}