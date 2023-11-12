class chancho {
  propiedad ='mi propiedad';
  #hambre = false
    constructor(estado = 'feliz', hambre = false) {
    this.estado = estado;
    this.hambre = hambre; 
  }
  hablar(){
    console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho'}`);
  }
  static comer(){
    console.log(this.propiedad,"estoy comiendo");
  }

}

chancho.comer()

const feliz = new chancho('triste');
feliz.hablar()

