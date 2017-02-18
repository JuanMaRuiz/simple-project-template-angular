(function(){
  'use strict';
  angular
    .module('bazingaApp', ['ui.router'])
    .config(configuration)

    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configuration($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          controller: 'StateHomeController',
          controllerAs: 'StateHomeCtrl',
          templateUrl: 'partials/home.html'
        })
        .state('state1', {
          url: '/state1',
          controller: 'StateOneController',
          controllerAs: 'StateOneCtrl',
          templateUrl: 'partials/state1.html'
        })
        .state('state2', {
          url: '/state2',
          templateUrl: 'partials/state2.html'
        });
      $urlRouterProvider.otherwise('/');
    }
})();
