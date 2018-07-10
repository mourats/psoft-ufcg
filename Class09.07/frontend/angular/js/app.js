const app = angular.module("Aplicativo", []);



app.factory('meusDados', meusDados);

function meusDados(){
  const dados = {
    nome: "Thiago",
    fone: 40028922
  }
  return dados;
}

function dados2() {
  service = {};
  const promise = fetch("dados/dados.json")
  .then(r => r.json())
  .then(d => {
    service.dados = d;
    return d;
  });
  service.fetch = function () {return promise}

  return service;
}
 app.factory("dados2", dados2)







app.controller('AppCtrl', AppCtrl);

function AppCtrl(meusDados, dados2) {
  const vm = this;
  vm.meusDados = meusDados;
  vm.dados2;
  vm.msg = "oi eu vim do controller";
}
