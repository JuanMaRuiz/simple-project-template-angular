(function(){
  'use strict';
  angular
    .module('bazingaApp')
    .controller('StateHomeController', StateHomeController);

    function StateHomeController() {
      var vm = this;
      vm.title = 'home';
    }
})();
