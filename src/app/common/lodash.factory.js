(function() {
  'use strict';

  angular.module('cpsc480assignment3')
    .factory('_', LodashFactory);

  /** @ngInject */
  function LodashFactory($window) {
    if (!$window._) {
      throw new Error("Lodash is not available. We should cry now.");
    }
    return $window._;
  }
})();
