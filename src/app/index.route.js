(function () {
  'use strict';

  angular.module('cpsc480assignment3')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
  }
})();
