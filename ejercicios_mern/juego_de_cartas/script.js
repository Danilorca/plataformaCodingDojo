class Card{
  constructor(name, cost){
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card{
  constructor(name, cost, powers, res){
    super(name, cost)
      this.powers = powers;
      this.res = res;

    /* attack(target){
      reduce target res by powers
    } */
  }
}

class Effect extends Card{
  constructor(name, cost){
    super(name, cost)
    this.text = text;
  }
}

/* play( target ) {
    if( target instanceof Unit ) {
        // implementa el texto de carta aquí
    } else {
        throw new Error( "Target must be a unit!" );
    }
}
 */
//Tarjetas de unidad
const NinjaRojo = new Unit("NinjaCinturonRojo", 3,3,4);
const NinjaNegro = new Unit("NinjaCinturonNegro",4 , 5, 4);

//Cartas de Efectos
const Efecto1 = new Effect("Algoritmo difícil",  2, "aumentar la resistencia del objetivo en 3", "resilencia", +3);

