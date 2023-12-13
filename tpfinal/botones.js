class Boton {
  constructor(tipo, posX, posY, movimiento, texto) {
    this.tipo = tipo
    this.posX = posX
    this.posY = posY
    this.movimiento = movimiento
    this.texto = texto
    this.ancho = 200
    this.alto = 50
  }

/// PARÁMETROS PARA CREAR LOS BOTONES 
  mostrar() {
    if (this.tipo === "rectangulo") {
      push()
      rectMode(CENTER)
      rect(this.posX, this.posY, this.ancho, this.alto)
      pop()
      push()
      textAlign(CENTER, CENTER)
      textSize(15)
      fill(0)
      text(this.texto, this.posX, this.posY)
      pop()
    } else if (this.tipo === "siguiente") {
      push ()
    rectMode (CENTER)
    rect(this.posX, this.posY, this.ancho/2, this.alto)
    pop()
    push()
    textAlign (CENTER, CENTER)
    textSize (15)
    fill (0)
    text (this.texto, this.posX, this.posY)
    pop()
    } else if (this.tipo === "anterior") {
      push ()
    rectMode (CENTER)
    rect(this.posX, this.posY, this.ancho/2, this.alto)
    pop()
    push()
    textAlign (CENTER, CENTER)
    textSize (15)
    fill (0)
    text (this.texto, this.posX, this.posY)
    pop()
    }
  }
/// VERIFICACIÓN DEL CLICK EN PANTALLAS 

  verificarClick() {
    if (mouseIsPressed && aventura.paso) {
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
}
