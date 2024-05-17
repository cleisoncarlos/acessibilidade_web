
/// toogle para expandir o botão de acessibilidade

function toggleCollapse() {
    var container = document.querySelector('.collapse-container');
    container.classList.toggle('collapsed');
}


//==================================================



// estilo monocromatico

document.getElementById('monochromeButton').addEventListener('click', function() {
    document.body.classList.toggle('monochrome');
});


//====================================

// tamanho das fonts
document.getElementById('decreaseFontSize').addEventListener('click', function() {
    decreaseFontSize();
});

document.getElementById('normalFontSize').addEventListener('click', function() {
    normalFontSize();
});

document.getElementById('increaseFontSize').addEventListener('click', function() {
    increaseFontSize();
});


function decreaseFontSize() {
    var elements = document.querySelectorAll('h1, h2, h3, p');
    elements.forEach(function(element) {
        var currentSize = parseInt(window.getComputedStyle(element).fontSize);
        var newSize = currentSize - 2;
        element.style.fontSize = newSize + 'px';
    });
}

function normalFontSize() {
    var elements = document.querySelectorAll('h1, h2, h3, p');
    elements.forEach(function(element) {
        element.style.fontSize = '16px';
    });
}

function increaseFontSize() {
    var elements = document.querySelectorAll('h1, h2, h3, p');
    elements.forEach(function(element) {
        var currentSize = parseInt(window.getComputedStyle(element).fontSize);
        var newSize = currentSize + 2;
        element.style.fontSize = newSize + 'px';
    });
}


 // FUNÇÃO QUE ATIVA O CONTRASTE DO SITE----------

 (function () {
    var Contrast = {
      storage: 'contrastState',
      cssClass: 'contrast',
      currentState: null,
      check: checkContrast,
      getState: getContrastState,
      setState: setContrastState,
      toogle: toogleContrast,
      updateView: updateViewContrast
    };

    window.toggleContrast = function () {
      Contrast.toogle();
    };

    Contrast.check();

    function checkContrast() {
      this.updateView();
    }

    function getContrastState() {
      return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
      localStorage.setItem(this.storage, '' + state);
      this.currentState = state;
      this.updateView();
    }

    function updateViewContrast() {
      var body = document.body;

      if (this.currentState === null)
        this.currentState = this.getState();

      if (this.currentState)
        body.classList.add(this.cssClass);
      else
        body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
      this.setState(!this.currentState);
    }
  })();


// regua de leitura


var reguaAtiva = false;

document.getElementById('regua-leitura').addEventListener('click', function() {
    if (reguaAtiva) {
        reguaAtiva = false;
        esconderReguaDeLeitura();
        document.querySelector('.div-acompanha-mouse').style.display = 'none'; // Esconde a régua
        
    } else {
        reguaAtiva = true;
        mostrarReguaDeLeitura();
        document.getElementById('followDiv').style.display = 'none';
        document.body.classList.remove('fonte-dislexia');  
    
    }
});



// Função para atualizar a posição da regua de leitura com base na posição do mouse
function atualizarPosicaoRegua(event) {
    if (reguaAtiva) {
        var regua = document.querySelector('.regua');
        regua.style.top = event.clientY + 'px'; // Posiciona a regua na posição vertical do mouse
    }    
}    

// Função para mostrar a regua de leitura e o fundo escurecido
function mostrarReguaDeLeitura() {
    var regua = document.querySelector('.regua');
    var fundoEscuro = document.querySelector('.fundo-escuro');
    regua.style.display = 'block'; // Mostra a regua
    fundoEscuro.style.display = 'block'; // Mostra o fundo escurecido
    // Adiciona evento de movimento do mouse para atualizar a posição da div
    document.addEventListener('mousemove', atualizarPosicaoDiv);
   // document.body.classList.add('fonte-dislexia');
}    

// Função para esconder a regua de leitura, o fundo escurecido e a div-acompanha-mouse
function esconderReguaDeLeitura() {
    var regua = document.querySelector('.regua');
    var fundoEscuro = document.querySelector('.fundo-escuro');
    regua.style.display = 'none'; // Esconde a régua
    fundoEscuro.style.display = 'none'; // Esconde o fundo escurecido
    reguaAtiva = false; // Define a variável de controle como false
    var divAcompanhaMouse = document.querySelector('.div-acompanha-mouse');
    divAcompanhaMouse.style.display = 'none'; // Esconde a div-acompanha-mouse
    // Remover o listener de eventos mousemove
    document.removeEventListener('mousemove', atualizarPosicaoDiv);
    //document.body.classList.remove('fonte-dislexia');
}    

// Adiciona evento de movimento do mouse para atualizar a posição da regua
document.addEventListener('mousemove', atualizarPosicaoRegua);

// Função para atualizar a posição da div com base na posição do mouse
function atualizarPosicaoDiv(event) {
    var divAcompanhaMouse = document.querySelector('.div-acompanha-mouse');
    divAcompanhaMouse.style.display = 'block'; // Mostra a div
    divAcompanhaMouse.style.left = event.clientX + 'px'; // Posiciona a div na posição horizontal do mouse
    divAcompanhaMouse.style.top = event.clientY + 'px'; // Posiciona a div na posição vertical do mouse
}

function atualizarPosicaoDivDislexia(event) {
   // var divAcompanhaMouse = document.querySelector('.div-dislexia');
    divAcompanhaMouse.style.display = 'block'; // Mostra a div
    divAcompanhaMouse.style.left = event.clientX + 'px'; // Posiciona a div na posição horizontal do mouse
    divAcompanhaMouse.style.top = event.clientY + 'px'; // Posiciona a div na posição vertical do mouse
}


// DISLEXIA =======================================


  // Função para criar a div que acompanha o mouse
  function criarDivQueAcompanhaMouse() {
    var div = document.getElementById('followDiv');

    // Adiciona um evento de movimento de mouse para atualizar a posição da div
    document.addEventListener('mousemove', function(event) {
        if (div.style.display !== 'none') { // Verifica se a div está visível
            // Atualize a posição da div para seguir o mouse
        div.style.top = (event.clientY + window.pageYOffset - div.offsetHeight / 2) + 'px';
        }
    });
}

// Função para mostrar ou esconder a div ao clicar no botão
function toggleDiv() {
    var div = document.getElementById('followDiv');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block'; // Mostra a div
        document.body.classList.add('fonte-dislexia');
        criarDivQueAcompanhaMouse();
        esconderReguaDeLeitura()
    } else {
        div.style.display = 'none'; // Esconde a div
        document.body.classList.remove('fonte-dislexia');
        esconderReguaDeLeitura()
       
    }
}

// Adiciona um evento de clique ao botão dislexia
document.getElementById('toggleButton').addEventListener('click', toggleDiv);



















