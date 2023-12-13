class Juego {

  constructor (aventura) {
      this.aventura = aventura
      this.estado = "INICIA"
      
      this.crearPersonaje()
      this.crearEnemigo()
      
      this.botonesJ = []
      
      this.fondo = loadImage ('assets/fondo/fondo1.png')
      this.inicio = loadImage ('assets/fondo/inicio.png')
  }

//// DEFINO COLISIONES DE ENEMIGOS Y PERSONAJE PRINCIPAL
  actualizar() {

 let colisionFrame = false

      for (let i = 0; i < this.enemigos.length; i++) {
      if (dist(this.personaje.posX, this.personaje.posY, this.enemigos[i].posX, this.enemigos[i].posY) <
      this.personaje.tam / 2 + this.enemigos[i].tam / 2) {
        
        if (!this.enemigos[i].colision) {
          this.personaje.vida--
          this.enemigos[i].colision = true
            colisionFrame = true
        }
      } else {
        this.enemigos[i].colision = false
      }
    }

    if (!colisionFrame) {
      this.personaje.puedeColisionar = true
    }
    
///// ASIGNO ESTADOS SEGÚN PERSONAJE

    if (this.personaje.vida <= 0) {
      this.estado = "PERDISTE"
    }
    if (this.personaje.vida >=1 && this.personaje.posY <= 20) {
      this.estado = "GANASTE"
    }
  }

//// DIBUJO LAS PANTALLAS DEL JUEGO SEGUN ESTADOS
  dibujar () {

    if (this.estado == "INICIA") {
      image (this.inicio, 0, 0)
        rect (50,400,500,100)
        push()
        fill (0)
        textAlign (CENTER, CENTER)
        textSize (30)
        text ("PRESS ENTER TO START", 50, 300, 500, 300)
        pop()
        
    } else if (this.estado == "JUEGO") {
      image (this.fondo, 0, 0)
        push()
        text ("VIDAS: " + this.personaje.vida, 20, 20)
        pop()
        this.actualizar()
        this.personaje.objetivo()
        this.personaje.dibujar()
        this.personaje.mover()
        for (let i =0; i< this.enemigos.length; i++) {
        this.enemigos[i].dibujar()
        this.enemigos[i].mover()
      }
      
    } else if (this.estado == "GANASTE") {
      background(139, 46, 84)
        push()
        fill(255, 254, 232)
        textAlign (CENTER, CENTER)
        textSize (40)
        text ("GANASTE", width/2, height/2)
        pop()
        this.crearBotonesJ()
        this.dibujarBotonesJ()

        for (let i = 0; i < aventura.botones.length; i++) {
        if (this.botonesJ[i]) {
          this.botonesJ[i].verificarClick()
        }
      }
      
    } else if (this.estado == "PERDISTE") {
      background(63, 63, 63)
        push()
        fill (255, 254, 232)
        textAlign (CENTER, CENTER)
        textSize (40)
        text ("PERDISTE", width/2, height/2)
        pop()
        this.crearBotonesJ()
        this.dibujarBotonesJ()
        for (let i = 0; i < aventura.botones.length; i++) {
        if (this.botonesJ[i]) {
          this.botonesJ[i].verificarClick()
        }
      }
    }
  }

  crearEnemigo () {
    this.enemigos = []
    this.cantEnemigos = 5
      for (let i = 0; i < this.cantEnemigos; i++) {
      this.enemigos.push(new Enemigo())
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width/2, 520, 50, 3)
  }

//// CREO LOS BOTONES PARA PANTALLAS DE JUEGO
  crearBotonesJ() {

    this.botonesJ = []

      if (this.estado == "GANASTE") {
      this.botonesJ.push(new Boton("rectangulo", 300, 520, 4, 'CONTINUAR'))
    }
    if (this.estado == "PERDISTE") {
      this.botonesJ.push(new Boton("anterior", 90, 520, 2, 'ATRÁS'))
      this.botonesJ.push(new Boton("siguiente", 500, 520, 13, 'CONTINUAR'))
    }
  }
  
//// MUESTRO LOS BOTONES DEL JUEGO
  dibujarBotonesJ() {

    for (let i = 0; i < this.botonesJ.length; i++) {
      this.botonesJ[i].mostrar()
    }
  }
  
//// LOGICA DE TECLAS PARA JUGAR
  
  teclas() {
    if (keyCode == 13) {
      this.estado = "JUEGO"
    }
  }
  teclaPres () {
    if (this.estado == "JUEGO") {
      this.personaje.teclaPresionada(keyCode)
    }
  }
  teclaLib () {
    if (this.estado =="JUEGO") {
      this.personaje.teclaLiberada(keyCode)
    }
  }
}
