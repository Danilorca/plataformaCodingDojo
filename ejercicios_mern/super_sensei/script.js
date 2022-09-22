class Ninja {
  constructor(nombre, salud, velocidad, fuerza) {
    this._nombre = nombre;
    this._salud = 100;
    this._velocidad = 3;
    this._fuerza = 3;
  }
  get nombre() {
    return this._nombre;
  }
  get salud() {
    return this._salud;
  }
  get velocidad() {
    return this.velocidad;
  }
  get fuerza() {
    return this._fuerza;
  }
  //métodos
  sayName() {
    return `Hola soy ${this._nombre}`;
  }

  showStats() {
    console.log(
      `Hola soy ${this._nombre}, tengo una fuerza de ${this._fuerza} , mi velocidad es ${this._velocidad} y mi salud es ${this._salud}`
    );
  }

  drinkSake() {
    console.log(` ${this._salud + 10}`);
  }
}

let ninja1 = new Ninja("Juan", 5, 4, 3);
//console.log(ninja1);
//console.log(ninja1.showStats());
//console.log(ninja1.drinkSake());

class Sensei extends Ninja {
  constructor(nombre, salud, velocidad, fuerza, sabiduria) {
    super(nombre);
    this._salud = 200;
    this._velocidad = 10;
    this._fuerza = 10;
    this._sabiduria = 10;
  }
  get sabiduria() {
    return this._sabiduria;
  }

  //métodos
  speakWisdom() {
    console.log(
      "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses"
      )
      this.drinkSake();
  }
}
// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
//console.log(superSensei);
superSensei.showStats();
