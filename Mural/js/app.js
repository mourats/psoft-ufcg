const app = angular.module('mural', []);

function AppCtrl() {
  const vm = this;
  vm.msg = "oi (vindo do controller)";
}

app.controller('AppCtrl', AppCtrl);
