(function(){
  'use strict';
  angular
    .module('bazingaApp')
    .controller('StateOneController', StateOneController);

    function StateOneController() {
      var vm = this;
      vm.title = 'state #1';
    }
})();
