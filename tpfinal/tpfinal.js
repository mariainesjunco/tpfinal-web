let aventura

function setup() {
  createCanvas(600, 600)
  aventura = new Aventura()
  aventura.inicializar()
}

function draw() {
  background(255)
  aventura.mostrar()
  
  if (aventura.mostrarJuego) {
    for (let i = 0; i < aventura.juego.botonesJ.length; i++) {
      aventura.juego.botonesJ[i].verificarClick()
    }
  } else {
    for (let i = 0; i < aventura.botones.length; i++) {
      aventura.botones[i].verificarClick()
    }
  }
}

function mouseMoved() {
  aventura.paso = true
}

function keyPressed() {
    aventura.juego.teclaPres(keyCode)
}

function keyReleased() { 
    aventura.juego.teclaLib(keyCode)
  }
