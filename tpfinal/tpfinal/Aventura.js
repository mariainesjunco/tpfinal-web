class Aventura {

  constructor() {
    this.pantallaN = 0
    this.ancho = 200
    this.alto = 50
    
    this.paso = false
    this.mostrarJuego = false

    this.botones = []
    this.textos = []
    this.imagenes = []

    this.inicializar()
  }

//// CARGO LAS IMAGENES Y TEXTOS

  inicializar() {
    this.textos = loadStrings("assets/texto.txt")

    for (let i = 0; i < 14; i++) {
      this.imagenes[i] = new Imagen("assets/" + i + ".png", width, height)
    }
  }

//// ASIGNO LOS TEXTOS SEGÚN PANTALLA

  textoActual() {
    return this.textos[this.pantallaN]
  }

//// MUESTRO IMAGENES Y TEXTOS SEGUN PANTALLA

  mostrar() {
    if (this.pantallaN != 3) {
      this.imagenes[this.pantallaN].mostrar()
      this.mostrarJuego = false
        push()
      textSize(17)
      fill(0)
      text(this.textoActual(), 50, 320, 500, 260)
      pop()

      this.ubicarBotones()
      this.dibujarBotones()
    }

//// SI LA PANTALLA ES 3 MUESTRO EL JUEGO

    if (this.pantallaN == 3 && !this.mostrarJuego) {
      this.iniciarJuego()
    }

    if (this.mostrarJuego) {
      this.juego.dibujar()
      this.juego.teclas()
        this.juego.teclaPres()
        this.juego.teclaLib()
    }
  }

//// CREO Y MUESTRO EL JUEGO

  iniciarJuego() {

    this.juego = new Juego()
    this.mostrarJuego = true

    if (mouseIsPressed && (this.mostrarJuego == true)) {
      if (
        mouseX > this.posX - this.ancho / 2 &&
        mouseX < this.posX + this.ancho / 2 &&
        mouseY > this.posY - this.alto / 2 &&
        mouseY < this.posY + this.alto / 2
        ) {
        aventura.pantallaN = this.movimiento
        aventura.paso = false
      }
    }
  }

//// CREO Y ASIGNO LOS BOTONES

  ubicarBotones() {
    this.botones = [] 
    
    //pantalla 0
      if (this.pantallaN == 0) {
      this.botones.push(new Boton("rectangulo", 300, 520, 1, 'COMENZAR'))
    }
    //pantalla 1
    if (this.pantallaN == 1) {
      this.botones.push(new Boton("rectangulo", 300, 520, 2, 'SIGUIENTE'))
    }
    //pantalla 2
    if (this.pantallaN == 2) {
      this.botones.push(new Boton("anterior", 90, 520, 11, 'CAMINO A'))
      this.botones.push(new Boton("siguiente", 500, 520, 3, 'CAMINO B'))
    }

/////////////////////////////pantalla Juego 3 /////////////////////////////

    //pantalla 4
    if (this.pantallaN == 4) {
      this.botones.push(new Boton("rectangulo", 300, 520, 5, 'SIGUIENTE'))
    }

    //pantalla 5
    if (this.pantallaN == 5) {
     this.botones.push(new Boton("anterior", 90, 520, 12, 'CAMINO A'))
      this.botones.push(new Boton("siguiente", 500, 520, 6, 'CAMINO B')) 
    }
    //pantalla 6
    if (this.pantallaN == 6) {
      this.botones.push(new Boton("rectangulo", 300, 520, 7, 'SIGUIENTE'))
      
    }
    //pantalla 7
    if (this.pantallaN == 7) {
      this.botones.push(new Boton("anterior", 90, 520, 12, 'CAMINO A'))
      this.botones.push(new Boton("siguiente", 500, 520, 8, 'CAMINO B'))
    }
    //pantalla 8
    if (this.pantallaN == 8) {
      this.botones.push(new Boton("anterior", 90, 520, 9, 'CAMINO A'))
      this.botones.push(new Boton("siguiente", 500, 520, 12, 'CAMINO B'))
    }
    //pantalla 9
    if (this.pantallaN == 9) {
     this.botones.push(new Boton("rectangulo", 300, 520, 10, 'SIGUIENTE'))
    }
    //pantalla 10
    if (this.pantallaN == 10) {
      this.botones.push(new Boton("anterior", 90, 520, 0, 'REINICIAR'))
      this.botones.push(new Boton("siguiente", 500, 520, 13, 'CRÉDITOS'))
    }
    //pantalla 11
    if (this.pantallaN == 11) {
      this.botones.push(new Boton("anterior", 90, 520, 0, 'REINICIAR'))
      this.botones.push(new Boton("siguiente", 500, 520, 13, 'CRÉDITOS'))
    }
    //pantalla 12
    if (this.pantallaN == 12) {
      this.botones.push(new Boton("anterior", 90, 520, 0, 'REINICIAR'))
      this.botones.push(new Boton("siguiente", 500, 520, 13, 'CRÉDITOS'))
    }
    //pantalla 13
    if (this.pantallaN == 13) {
      this.botones.push(new Boton("rectangulo", 300, 520, 0, 'REINICIAR'))
    }
  }

//// MUESTRO LOS BOTONES

  dibujarBotones() {

    for (let i = 0; i < this.botones.length; i++) {
      this.botones[i].mostrar()
    }
  }
}
