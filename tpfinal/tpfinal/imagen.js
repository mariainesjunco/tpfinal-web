class Imagen {
  constructor(ruta, anchoI, altoI) {
    this.img = loadImage(ruta)
    this.img.resize(anchoI, altoI)
  }

  mostrar() {
    image(this.img, 0, 0)
  }
}
