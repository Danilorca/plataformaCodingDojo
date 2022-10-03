class Animal {
  constructor(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
  }
  //Métodos
  sonar(){
    console.log("Hago sonidos porque estoy vivo")
  }
  saludar(){
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamaño) {
    super(nombre, genero);
    this.tamaño = tamaño;
  }

  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }

  ladrar() {
    console.log("Guaaau Guauuuuuu!");
  }
}

const mimi = new Animal("Mimi", "hembra"),
scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();