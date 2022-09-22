class Ninja{
  constructor(nombre){
    this._nombre = nombre;
    this._salud = 100;
    this._velocidad = 3;
    this._fuerza = 3;
  }
  get nombre(){
    return this._nombre
  }
  get salud(){
    return this._salud
  }
  get velocidad(){
    return this.velocidad
  }
  get fuerza(){
    return this._fuerza
  }
  //métodos
  sayName(){
    return `Hola soy ${this._nombre}`;
  }

  showStats(){
    return `Hola soy ${this._nombre}, tengo una fuerza de ${this._fuerza} , mi velocidad es ${this._velocidad} y mi salud es ${this._salud}`;
  }

  drinkSake(){
    return` ${this._salud + 10}`
  }
}

let ninja1 = new Ninja("Juan", 5, 4, 3);
console.log(ninja1);
console.log(ninja1.showStats())
console.log(ninja1.drinkSake());