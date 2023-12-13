class Personaje {

  constructor(posX, posY, tam, vida) {

      this.posX = posX
      this.posY = posY
      this.tam = 30
      this.vida = vida
      this.imagen = loadImage ('assets/pj/alice1.png')
      this.imagenO = loadImage ('assets/pj/bunny.png')

    this.movimientoAbajo = false;
    this.movimientoArriba = false
    this.puedeColisionar = true
  }

  dibujar () {

    image (this.imagen, this.posX, this.posY, this.tam*1.5, this.tam*3)
  }

  objetivo() {
    image (this.imagenO, 270, 0, 50, 50)
  }

  actualizar() {
    if (this.puedeColisionar && this.vida > 0) {
      this.verificarColision()
    }
  }
  verificarColision() {
    for (let i = 0; i < this.enemigos.length; i++) {
      if (
        dist(this.posX, this.posY, this.enemigos[i].posX, this.enemigos[i].posY) <
        this.tam / 2 + this.enemigos[i].tam / 2
        ) {
        if (!this.enemigos[i].colision) {
          this.vida--
          this.enemigos[i].colision = true
          this.puedeColisionar = false 
        }
      } else {
        this.enemigos[i].colision = false
      }
    }
  }
  teclaPresionada(keyCode) {
    
    if (keyCode === DOWN_ARROW) {
      this.movimientoAbajo = true
    } else if (keyCode === UP_ARROW) {
      this.movimientoArriba = true
    }
  }


  teclaLiberada(keyCode) {
    
    if (keyCode === DOWN_ARROW) {
      this.movimientoAbajo = false
    } else if (keyCode === UP_ARROW) {
      this.movimientoArriba = false
    }
  }

  mover() {
    
    if (this.movimientoAbajo) {
      this.posY += 15
    }
    if (this.movimientoArriba) {
      this.posY -= 15
    }
  }
}
