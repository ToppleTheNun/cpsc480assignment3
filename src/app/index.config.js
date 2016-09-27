(function () {
  'use strict';

  angular.module('cpsc480assignment3')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    // @if DEBUG='true'
    $logProvider.debugEnabled(true);
    // @endif
    // @if DEBUG='false'
    $logProvider.debugEnabled(false);
    // @endif
  }
})();
