const a = {};
const b = {};

a.__proto__.metodo = function () {return this.x; }

const c = {};

a.x = 10;
b.x = 20;
c.x = 15;

console.log(a.metodo());
console.log(b.metodo());
console.log(c.metodo());

a.m2 = function() {return b.metodo() + this.x};

console.log(a.m2());


function fx(){
  b.metodo() + this.x;
}

fx.x =1000;
