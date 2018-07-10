function build_animal(){
  const animal = {};
  return animal;
}

const gato = build_animal();
const cachorro = build_animal();
const pato = build_animal();


function Animal() {
}
Animal.prototype.fale = function () {return `oi, eu sou um ${this.tipo} porraa!!!`};

const gato2 = new Animal();
gato2.tipo = "gato";
const cachorro2 = new Animal();
cachorro2.tipo = "cachorro";
const pato2 = new Animal();
pato2.tipo = 'pato';

console.log(gato2.fale());
console.log(cachorro2.fale());
console.log(pato2.fale());

console.log(gato2.__proto__ === Animal.prototype);

function Bixo(tipo) {
  this.tipo = tipo;
}
Bixo.prototype.fale = function () {return `oi, eu sou um ${this.tipo} porraa!!!`};
const galo = new Bixo("GALOOOO");
console.log(galo.fale());

//Construtor Funcional

const meu_prototipo = {fale: function() { return `oi, eu sou um ${this.tipo} `}};

function animal(tipo){
  const este = Object.create(meu_prototipo);
  este.tipo = tipo;
  return este;
}

const irineu = animal('vc nao sabe nem eu');
console.log(irineu.fale());
console.log(meu_prototipo.fale());
