class Enemigo {

  constructor (posX, posY, tam) {
      this.posX = random (width)
      this.posY = random (100, 420)
      this.tam = 20
      this.velocidad = int (random (3, 6))
      
      this.colision = false
      
      this.imagen1 = loadImage ('assets/pj/bee.png')
      this.imagen2 = loadImage ('assets/pj/ardi.png')
  }

  dibujar () {
    push()
      noStroke()
      if (this.velocidad != 3) {
      image (this.imagen1, this.posX, this.posY, this.tam*2, this.tam)
    } else if (this.velocidad == 3) {
      image (this.imagen2, this.posX, this.posY, this.tam*4, this.tam*2)
    pop()
    }
  }


  mover () {

    this.posX += this.velocidad
      if (this.posX > width) {
      this.posX = 0
      this.posY = random(100, 420)
      this.velocidad = int (random(3, 6))
    }
  }
}
