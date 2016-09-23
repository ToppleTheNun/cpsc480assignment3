(function () {
  'use strict';

  angular.module('cpsc480assignment3')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }
})();
